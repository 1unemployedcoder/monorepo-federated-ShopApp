import Carousel from "react-spring-3d-carousel";
import React, {useState, useEffect, useMemo} from "react";
import { config } from "react-spring";
import {CardsArray, CarouselItemProps} from "@/@types/typesComponents";

const CarouselCard: React.FC<CarouselItemProps> = ({cardsArray, height, width, margin, offset, showArrowsState}) => {
    const table = useMemo(() => {
       return  cardsArray.map((element, index) => {
            return { ...element, onClick: () => setGoToSlide(index) };
        });
    }, [cardsArray])

    const [offsetRadius, setOffsetRadius] = useState(2);
    const [showArrows, setShowArrows] = useState(false);
    const [goToSlide, setGoToSlide] = useState(0);
    const [cards, setCards] = useState<CardsArray[]>([]);

    useEffect(() => {
        setOffsetRadius(offset);
        setShowArrows(showArrowsState);
        setCards(table)
    }, [table, offset, showArrowsState]);

    return (
        <div
            style={{ width, height, margin }}
        >
            <Carousel
                slides={cards}
                goToSlide={goToSlide}
                offsetRadius={offsetRadius}
                showNavigation={showArrows}
                animationConfig={config.stiff}
            />
        </div>
    );
}

export default CarouselCard
