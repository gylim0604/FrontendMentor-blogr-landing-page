import { Box, Container, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import WidthWrapper from '../components/WidthWrapper';

export default function Home() {
    return (
        <Flex alignItems='center' flexDir='column'>
            <Head>
                <title>Create Next App</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header />
            <WidthWrapper>
                <Section1 />
            </WidthWrapper>
            <Section2 />
            <WidthWrapper>
                <Section3 />
            </WidthWrapper>

            <Footer />
        </Flex>
    );
}
