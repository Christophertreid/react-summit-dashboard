import styled from 'styled-components';



const EditorFeedbackStyles  = styled.div`
    width: 80%;
    margin: 0 auto;
    text-align: center;
`;

const FeedbackMessage = styled.figcaption`
    font-size: 2rem;
    color: ${({theme})=> theme.colors.ltBlue};
`;

const FeedbackIcon = styled.figure`
    color: ${({theme})=> theme.colors.ltBlue};  
`;

const FeedbackOption = styled.footer`
    display: flex;
    justify-content: center;
    gap: 2rem;
    button{
        width: fit-content;
        padding: 0.25rem 0.75rem;
    }
    
`;


export {EditorFeedbackStyles, FeedbackMessage, FeedbackIcon, FeedbackOption}