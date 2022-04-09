import React from 'react';
import {IoCloudUploadSharp,IoCheckmarkCircleSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { Button } from 'components/Buttons/Button';
import {EditorFeedbackStyles, FeedbackMessage, FeedbackIcon, FeedbackOption} from './styles'

function EditorFeedback ({children, status, writeCompleted, ...props})  {
    const navigate = useNavigate();
  return (
        <EditorFeedbackStyles  {...props}>
           {
             !status
             ?
             <FeedbackIcon>
            <IoCheckmarkCircleSharp color={({theme})=> theme.colors.ltBlue} size="12rem" />
             <FeedbackMessage>
                Product Uploaded Successfully
             </FeedbackMessage>
           </FeedbackIcon>
           :
           <FeedbackIcon>
            <IoCloudUploadSharp color={({theme})=> theme.colors.ltBlue} size="12rem" />
             <FeedbackMessage>
                Uploading...
             </FeedbackMessage>
           </FeedbackIcon>
           }
          <FeedbackOption>
            <Button onClick={()=>writeCompleted(false)}
            disabled={status}
            >Add Another Product</Button>
            <Button onClick={()=> navigate('/dashboard')}
            >View All Products</Button>
          </FeedbackOption>
        </EditorFeedbackStyles>
  )
}

export default EditorFeedback