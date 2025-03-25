import React from 'react'
import { Button, Form, Input } from 'antd';



const HomePage = () => {


  const [form] = Form.useForm();





  return (
    <div className="home-container">
      {/* header section */}
      <div className="app-header">

        <h1 className="heading">Hello, there</h1>
        <h3 className="sub-heading">How can I help you today?</h3>
      </div>
      {/* header section end */}

      {/* suggestion list   */}
      <ul className='suggestions'>
        <li className='suggestions-item' >
          <p className='text'>Ask Legal Question </p>
          <p className='ask-legal-question'>Example: What is Article 23 in the Indian Constitution?</p>
          <span className='icon material-symbols-rounded'>gavel</span>
        </li>

        <li className='suggestions-item'  >
          <p className='text'>Legal Advice </p>

          <span className='icon material-symbols-rounded'>draw</span>
        </li>

        <li className='suggestions-item'>
          <p className='text'>Review and provide feedback on my legal documents</p>
          <span className='icon material-symbols-rounded'>rate_review</span>
        </li>

        <li className='suggestions-item'>
          <p className='text'>Check legal fees</p>
          <span className='icon material-symbols-rounded'>attach_money</span>
        </li>

        <li className='suggestions-item '>
          <p className='text'>Document Drafting </p>
          <span className='icon material-symbols-rounded'>attach_money</span>
        </li>

      </ul>
      {/* suggestion list end */}

      {/* input section */}
      <div className="prompt-container" >
        <div className='prompt-wrapper'>

          <Form
            form={form}
            className='prompt-form'
          >
            {/* <input type="text" name='message' className='prompt-input' placeholder='Type your message....' required /> */}
            <Form.Item >
              <Input type='text' name='message' className='prompt-input' placeholder="Type your message...." required />
            </Form.Item>
            <div className="prompt-actions">
              {/* <div className="file-upload-wrapper">
                <img src="#" className='file-preview' />
                <button type="button" class="file-icon material-symbols-rounded">description</button>
                <button id="cancel-file-btn" type="button" class="material-symbols-rounded">close</button>


              </div> */}
              {/* <button type="button" className="material-symbols-rounded">stop_circle</button>
              <button type='submit' className='material-symbols-rounded'>arrow_upward</button> */}

              <Form.Item>
                <Button type="button" className="material-symbols-rounded">stop_circle</Button>
              </Form.Item>
              <Form.Item>
                <Button type="submit" className="material-symbols-rounded">arrow_upward</Button>
              </Form.Item>

            </div>
          </Form>

          <button className="material-symbols-rounded" >chat</button>
          <button className='material-symbols-rounded'>light_mode</button>
          <button className='material-symbols-rounded'>delete</button>

        </div>
      </div>

    </div>

  )
}

export default HomePage