import './CropperModal.scoped.scss';

import { Cropper } from 'react-cropper';
import { RoundedButton } from '../../atoms/RoundedButton';

export type CropperModalProps = {
    className?: string;
    src: string;
    cropperRef: React.RefObject<HTMLImageElement>;
    cropFn: () => void;
};
CropperModal.defaultProps = {
    className: ''
};

export function CropperModal({
    className,
    src,
    cropperRef,
    cropFn
}: CropperModalProps) {
    return (
        <div className={`CropperModal ${className}`}>
            <div className="CropperModal-body">
                <div
                    className="CropperModal-cropper"
                    style={{ height: 400, width: '100%' }}
                >
                    <Cropper
                        src={src}
                        style={{ height: '100%', width: '100%' }}
                        // Cropper.js options
                        initialAspectRatio={1}
                        aspectRatio={1}
                        guides
                        // crop={cropFn}
                        ref={cropperRef}
                    />
                </div>
                <div className="CropperModal-control">
                    <RoundedButton text="crop" onClick={cropFn} />
                </div>
            </div>
        </div>
    );
}
