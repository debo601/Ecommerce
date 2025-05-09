import React from 'react'
import styled from "styled-components"
import { Button } from "./styles/Button"
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <Wrapper>
            <div className='container'>
                <div>
                    <h2>404</h2>    
                    <h3>UH OH! You're lost.</h3>
                    <p>The page you are looking for does not exist. How you got here is a mystery.But you can click the button below to go back to the homepage.</p>

                    <NavLink to="/">
                        <Button>Go Back to Home</Button>
                    </NavLink>

                </div>
            </div>
        </Wrapper>
    )
};

const Wrapper = styled.section`

.container {
    padding: 9rem 0;
    text-align: center;
}
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }

    h2{
        font-size: 10rem;
    }

    h3{
        font-size: 4.2rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
      margin: 2rem 0;
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default ErrorPage
