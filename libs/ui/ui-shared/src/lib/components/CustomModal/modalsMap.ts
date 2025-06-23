import { ModalType } from "./modalType";
import {AddUserModal, AddProductModal, EditUserModal, EditProductModal, DeleteModal} from "./modals";

export const modalsMap = {
        [ModalType.ADD_USER]: AddUserModal,
        [ModalType.ADD_PRODUCT]: AddProductModal,
        [ModalType.EDIT_USER]: EditUserModal,
        [ModalType.EDIT_PRODUCT]: EditProductModal,
        [ModalType.DELETE]: DeleteModal,
}
