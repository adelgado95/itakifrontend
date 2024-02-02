export const AddToCartButton = ( { children, onClick = () => {} }) => {
    return (
        <button className={'button-cart'} onClick={onClick}>{children ?? 'AÑADIR AL CARRITO'}</button>
    )
}

export default AddToCartButton;
