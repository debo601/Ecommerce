import React from 'react';
import styled from 'styled-components';

const MyImage = ({ imgs = [{ url: "" }] }) => {
    console.log("images", imgs);
    return (
        <Wrapper>
            <div className='image-grid'>
                {
                    imgs.map((curElem, index) => {
                        return (
                            <figure key={index}>
                                <img
                                    src={curElem.url}
                                    alt={curElem.filename}
                                    className='box-image--style'
                                />
                            </figure>
                        )
                    })
                }
            </div>
            <div className='main-screen'>
                <img src={imgs[0].url} alt={imgs[0].filename} />
            </div>
        </Wrapper>
    )
};

const Wrapper = styled.section`
   .image-grid {
       display: grid;
       grid-template-columns: repeat(4, 1fr);
       gap: 1rem;
   }

   .box-image--style {
       width: 100%;
       height: auto;
       display: block;
   }
`;

export default MyImage;