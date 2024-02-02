export const Carousel = ({images = [], selectedImage = null, setSelectedImageIndex = () => {}}) => {

    return (
        <div className={'carousel'}>
            <div className="main-image">
                {
                    <img src={`/assets/img/${selectedImage?.foto}`} alt="shoe"/>
                }
            </div>
            <hr/>
            <div className="thumbnails">
                {
                    images?.map((item, index) => {
                        return (
                            <div onClick={() => {
                                setSelectedImageIndex(index)
                            }}>
                                <img src={`/assets/img/${item?.foto}`} alt=""/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Carousel;
