'use client'

import React from 'react'
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Button,
} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function ProductCrousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
        date: 'September 12-22',
      title: 'Enjoy free home delivery in this summer',
      text: "Designer Dresses - Pick from trendy Designer Dress.",
      image:
        'https://files.123freevectors.com/wp-content/solidbackground/deep-sky-blue-free-solidcolor-background.jpg',
        button: "Get Started",
    },
    {
        date: 'September 12-22',
      title: 'Design Projects 2',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://files.123freevectors.com/wp-content/solidbackground/deep-sky-blue-free-solidcolor-background.jpg',
        button: "Get Started",
    },
    {
        date: 'September 12-22',
      title: 'Design Projects 3',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://files.123freevectors.com/wp-content/solidbackground/deep-sky-blue-free-solidcolor-background.jpg',
        button: "Get Started",
    },
  ]

  return (
    <Box position={'relative'} height={'300px'} borderRadius={'20px'} width={'full'} overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        color={'white'}
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        color={'white'}
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            color={'white'}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                // spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="25%"
                right={"30%"}
                transform="translate(0, -50%)">
                    <Text fontSize={{ base: 'md', lg: 'lg' }}>{card.date}</Text>
                <Heading fontSize={{ base: '2xl', md: '2xl', lg: '3xl' }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} >
                  {card.text}
                </Text>
                <Button bg={"orange.400"} width={"150px"} color={"white"}>{card.button}</Button>
              </Stack>
            </Container>
          </Box>
        ))}
        
      </Slider>
    </Box>
  )
}