import { FaRegWindowClose } from 'react-icons/fa';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import clsx from 'clsx';
import { portfolio as constants } from '../../data';

type CustomDrawerProps = DrawerProps & {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
    containerClassName?: string;
    contentClassName?: string;
    drawerTitle?: string;
};

const CustomDrawer: React.FC<CustomDrawerProps> = ({
    isOpen,
    onClose,
    children,
    anchor = 'right',
    className = '',
    containerClassName = '',
    contentClassName = '',
    drawerTitle = '',
    slotProps = {
        paper: {
            sx: { width: '90%' },
        },
    },
}) => {
    return (
        <Drawer
            className={className}
            anchor={anchor}
            open={isOpen}
            onClose={onClose}
            slotProps={slotProps}
        >
            <div className={`p-2 ${containerClassName}`}>
                <div
                    className={clsx('flex items-center justify-end', {
                        'justify-between': drawerTitle,
                    })}
                >
                    {drawerTitle && (
                        <h1 className="text-lg font-semibold capitalize">
                            {drawerTitle}
                        </h1>
                    )}
                    <button
                        type="button"
                        onClick={onClose}
                        title={constants.ui.drawer.closeTitle}
                        className="transition duration-300 hover:scale-90"
                    >
                        <FaRegWindowClose />
                    </button>
                </div>
                <div className={contentClassName}>{children}</div>
            </div>
        </Drawer>
    );
};

export default CustomDrawer;
