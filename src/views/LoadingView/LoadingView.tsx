import './LoadingView.scss';

import OptleafLogo from '@/assets/images/logo/white.svg';

export function LoadingView() {
    return (
        <div className="LoadingView">
            <div className="LoadingView-body">
                <img src={OptleafLogo} alt="Optleaf logo" />
            </div>
        </div>
    );
}
