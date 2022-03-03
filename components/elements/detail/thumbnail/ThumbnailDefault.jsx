import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import Lightbox from 'react-image-lightbox';
import { baseUrl } from '~/repositories/Repository';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';

const ThumbnailDefault = ({ product, vertical = true }) => {
    const galleryCarousel = useRef(null);
    const variantCarousel = useRef(null);
    const [gallery, setGallery] = useState(null);
    const [variant, setVariant] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [productImages, setProductImages] = useState([]);

    const handleOpenLightbox = (e, imageIndex) => {
        e.preventDefault();
        setPhotoIndex(imageIndex);
        setIsOpen(true);
    };

    useEffect(() => {
        let images = [];
        console.log({ product })
        if (product && product.imageProduct.idBrowserPhoto.length > 0) {
            setProductImages(images);
        }
        setGallery(galleryCarousel.current);
        setVariant(variantCarousel.current);
    }, [product]);

    const gallerySetting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    const variantSetting = {
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    dots: false,
                    arrows: false,
                    vertical: false,
                    infinite: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    dots: false,
                    arrows: false,
                    vertical: false,
                    infinite: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    dots: false,
                    arrows: false,
                    vertical: false,
                    infinite: false,
                },
            },
        ],
    };

    //Views
    let lightboxView, variantCarouselView, imagesView, galleryImagesView;
    if (productImages.length > 0) {
        imagesView = productImages.map((item) => (
            <div className="item" key={item}>
                <img src={`https://herbalbackend.herokuapp.com/api/upload/image/download/${product.imageProduct.idBrowserPhoto}`} alt={product.imageProduct.idBrowserPhoto} />
            </div>
        ));
        galleryImagesView = productImages.map((item, index) => (
            <div className="item" key={item}>
                <a href="#" onClick={(e) => handleOpenLightbox(e, index)}>
                    <img src={`https://herbalbackend.herokuapp.com/api/upload/image/download/${product.imageProduct.idBrowserPhoto}`} alt={product.imageProduct.idBrowserPhoto} />
                </a>
            </div>
        ));
    }
    const viewNice = () => (
        <div className="item">
            <img src={`https://herbalbackend.herokuapp.com/api/upload/image/download/${product.imageProduct.idBrowserPhoto}`} alt={product.imageProduct.idBrowserPhoto} />
        </div>

    )
    if (vertical) {
        variantCarouselView = (
            <div
                className="ps-product__variants">
                {viewNice}
            </div>
        );
    } else {
        variantCarouselView = (
            <div
                className="ps-product__variants">
                {viewNice}
            </div>
        );
    }
    if (isOpen) {
        lightboxView = (
            <Lightbox
                mainSrc={`https://herbalbackend.herokuapp.com/api/upload/image/download/${product.imageProduct.idBrowserPhoto}`}
                onCloseRequest={() => {
                    setIsOpen(false);
                }}
                onMovePrevRequest={() => {
                    setPhotoIndex(
                        (photoIndex + productImages.length - 1) %
                        productImages.length
                    );
                }}
                onMoveNextRequest={() => {
                    setPhotoIndex((photoIndex + 1) % productImages.length);
                }}
            />
        );
    }

    return (
        <div
            className="ps-product__thumbnail"
            data-vertical={vertical ? 'true' : 'false'}>
            <figure>
                <div className="ps-wrapper">
                    <div>
                        {/* // {...gallerySetting}
                        // ref={(slider) => (galleryCarousel.current = slider)}
                        // asNavFor={variant}
                        // className="ps-product__gallery ps-carousel inside"> */}
                        <div className="item">
                            <a href="#" onClick={(e) => handleOpenLightbox(e)}>
                                <img src={`https://herbalbackend.herokuapp.com/api/upload/image/download/${product.imageProduct.idBrowserPhoto}`} alt={product.imageProduct.idBrowserPhoto} />
                            </a>
                        </div>
                    </div>
                </div>
            </figure>
            {variantCarouselView}
            {lightboxView}
        </div>
    );
};

export default ThumbnailDefault;
