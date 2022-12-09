import './EditProfileForm.scoped.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'cropperjs/dist/cropper.css';

import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import { UserIcon } from '@/features/dashboard/atoms/UserIcon';
import { useAuth } from '@/providers/auth';
import { Modal } from '@/features/dashboard/molecules/Modal';
import { useModalManageStore } from '@/features/dashboard/stores/modalManager';

import { InputText } from '../../atoms/InputText';
import { UserInputData } from '../../types';
import { RoundedButton } from '../../atoms/RoundedButton';
import { UpdateUserData } from '../../api/user';
import { CropperModal } from '../../molecules/CropperModal';

export type EditProfileFormProps = {
    className?: string;
    waitingFn: (v: boolean) => void;
};
EditProfileForm.defaultProps = {
    className: ''
};

export function EditProfileForm({
    className,
    waitingFn
}: EditProfileFormProps) {
    const form = useForm<UserInputData>();
    const { user } = useAuth();
    const cropperRef = useRef<HTMLImageElement>(null);
    const imageReceiverRef = useRef(null);
    const [cropImage, setCropImage] = useState('');
    const [iconImage, setIconImage] = useState('');
    const modal = useModalManageStore();

    useEffect(() => {
        if (!user) return;
        setIconImage(user.icon_image);
    }, [user]);

    const startCropFn = (e: any) => {
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
            e.dataTransfer.files = [];
        } else if (e.target) {
            files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
            setCropImage(reader.result as any);
            modal.open('CropperModal');
            e.target.value = null;
        };
        reader.readAsDataURL(files[0]);
    };

    const cropFn = () => {
        const imageElement: any = cropperRef?.current;
        const cropper: any = imageElement?.cropper;
        cropper.getCroppedCanvas().toBlob((blob: any) => {
            const file = new File([blob], `${user?.email}${Date.now()}`);
            form.setValue('icon_image', file);
        });
        setIconImage(cropper.getCroppedCanvas().toDataURL());
        modal.close();
    };

    const submitFn = async (data: UserInputData) => {
        waitingFn(true);
        try {
            await UpdateUserData(data);
        } catch (error) {
            console.log(error);
        }
        waitingFn(false);
    };

    return (
        <div className={`EditProfileForm ${className}`}>
            <form
                className="EditProfileForm-form"
                onSubmit={form.handleSubmit(submitFn)}
            >
                <div className="EditProfileForm-icon">
                    <UserIcon src={iconImage} size="90px" />
                    <input
                        className="EditProfileForm-icon-receiver"
                        type="file"
                        id="receiver"
                        accept="image/png, image/jpeg"
                        onChange={startCropFn}
                        ref={imageReceiverRef}
                    />
                </div>
                <div className="EditProfileForm-form-row">
                    <InputText
                        id="name"
                        type="name"
                        label="name"
                        placeholder={user?.name}
                        config={form.register('name')}
                    />
                </div>
                <div className="EditProfileForm-form-row">
                    <InputText
                        id="email"
                        type="email"
                        label="email"
                        placeholder={user?.email}
                        config={form.register('email')}
                    />
                </div>
                <RoundedButton text="submit" />
            </form>
            <p className="EditProfileForm-msg">
                Enter only the information you wish to change.
            </p>

            <Modal visible={modal.isOpened('CropperModal')}>
                <CropperModal
                    src={cropImage}
                    cropperRef={cropperRef}
                    cropFn={cropFn}
                />
            </Modal>
        </div>
    );
}
