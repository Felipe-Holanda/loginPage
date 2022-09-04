class ModalFunctions {
    modalStyle = document.querySelector('.modal').style.display

    hideModal() {
        this.modalStyle = 'none'
    }

    displayModal() {
        this.modalStyle = 'flex'
    }
}

export { ModalFunctions }