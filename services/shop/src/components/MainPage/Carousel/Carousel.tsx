import React, { useEffect, useState } from 'react'
import { useFetching } from '@/hooks/useFetching'
import { getPopular } from '@/API/ProductService'
import Card from '../../ui/card/Card'
import CarouselCard from './CarouselItem'
import ConditionalContent from '../../ConditionalContent'
import CarouselSkeleton from './CarouselSkeleton'
import { type Product } from '@/@types/types'

const Carousel = () => {
    const [carousel, setCarousel] = useState<Product[]>([])
    const [fetchCarousel, isLoadingCarousel, errorCarousel, setErrorCarousel] = useFetching(async () => {
        const response = await getPopular()
        setCarousel(response)
    })

    useEffect(() => {
        void fetchCarousel()
    }, [errorCarousel])

    const cards = carousel.map(card => {
        return {
            key: card.id,
            content: (
                <Card
                    id={card.id}
                    image={card.img}
                    name={card.name}
                />
            )
        }
    })

    return (
        <ConditionalContent
            isLoading={isLoadingCarousel}
            refresh={setErrorCarousel}
            error={errorCarousel}
            data={carousel.length}
            SkeletonComponent={CarouselSkeleton}
            search={null}>
            <CarouselCard
                cardsArray={cards}
                height="100%"
                width="100%"
                margin="0 auto"
                offset={100}
                showArrowsState={false}
            />
        </ConditionalContent>
    )
}

export default Carousel
