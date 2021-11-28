import {html} from "./signupform.html"
const SignupForm = ({ title }) => {
    return (
      
      <div className="content" dangerouslySetInnerHTML={{__html: html}}></div>
      
    )
  };
  export default SignupForm;