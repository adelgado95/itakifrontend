import {useState} from "react";

export const Sizes = ({list}) => {

    const [selectedSize, setSelectedSize] = useState(list ? list[0] : null)

    return (
        <div className={'sizes'}>
            {
                list?.map((item) => {
                    return (
                        <div className={`${selectedSize === item ? 'selected' : ''}`} onClick={() => setSelectedSize(item)}>
                            {item}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Sizes;
