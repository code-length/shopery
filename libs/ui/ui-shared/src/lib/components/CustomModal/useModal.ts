import { useModalStore } from "./modalStore";
import { ModalType } from "./modalType";

export const useModal = () => {
        const { openModal, closeModal } = useModalStore();

        return {
                openAddUserModal: (props?: Record<string, any>) => openModal(ModalType.ADD_USER, props),
                openAddProductModal: (props?: Record<string, any>) => openModal(ModalType.ADD_PRODUCT, props),
                openEditUserModal: (props?: Record<string, any>) => openModal(ModalType.EDIT_USER, props),
                openEditProductModal: (props?: Record<string, any>) => openModal(ModalType.EDIT_PRODUCT, props),
                openEditOrderModal: (props?: Record<string, any>) => openModal(ModalType.EDIT_ORDER, props),
                openDeleteModal: (props?: Record<string, any>) => openModal(ModalType.DELETE, props),   
                closeModal
        }
}
