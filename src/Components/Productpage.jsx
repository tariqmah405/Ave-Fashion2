import React from 'react';
import { Container, Row, Col, Carousel, Card, Tabs, Tab } from 'react-bootstrap';
import "./Productpage.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import icons 
import { FaFacebookF } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { GrGooglePlus } from 'react-icons/gr';
import { BsArrowUpSquare, BsFillCartPlusFill} from 'react-icons/bs';
import { AiOutlineMail, AiFillStar, AiOutlineStar, AiOutlineHeart, AiFillCompass } from 'react-icons/ai';

//carousel pics
import manpic from "../Components/images/photo4.png";
import manpic2 from "../Components/images/photo3.png";
import Backhero from './Commen/hero/Backhero';


const Productpage = () => {
  return (
    <section>
        <Backhero span="PRODUCT" title="VIEW" subtitle="MENS-CASUALS-HOODIES & SWAET SHIRTS -" spantow="AVE CLASSIC SWEATSHIRT"/>
    <Container>
        <Row className='my-3'>
            <Col md={6} sm={12}>
            <Carousel>
                <Carousel.Item>
                    <img src={manpic} alt="manpic" className='d-block w-100'/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={manpic2} alt="manpic2" className='d-block w-100' />
                </Carousel.Item>
            </Carousel>
            </Col>
            <Col md={6} sm={12}>
                <Card.Title>AVE CLASSIC SWEATSHIRT</Card.Title>
                <Col md={12} sm={12} xs={12}>
                <div className="d-flex my-3" style={{alignItems:"center"}}>
                                <AiFillStar />    
                                <AiFillStar />    
                                <AiFillStar />    
                                <AiFillStar />    
                                <AiOutlineStar />
                                 3Review(s) |
                                <span className="add_review text-dark p-2">Add a Review | Share:</span> 
                                <div className="icons d-flex">
                                <FaFacebookF/>
                                <ImTwitter/>
                                <GrGooglePlus/>
                                <BsArrowUpSquare/>
                                <AiOutlineMail/>
                                </div>                  
                </div>
                <Col md={12} sm={12}>
                <h1 className='my-3'><sup>&</sup><span style={{textDecorationLine: "line-through"}}>107</span><sup>&</sup>89.99</h1>
                <h5 className='--bs-gray-100'style={{ color: "--bs-gary", fontWeight: "600", fontSize: "16px"}}>AVAILABILITY:<span style={{ color: "--bs-gary", fontWeight: "400"}}>InStock</span></h5>
                <h5 className='--bs-gray-100'style={{ color: "--bs-gary", fontWeight: "600", fontSize: "16px"}}>PRODUCT CODE:<span style={{ color: "--bs-gary", fontWeight: "400",}}>#499577</span></h5>
                <h5 className='--bs-gray-100 mb-3'style={{ color: "--bs-gary", fontWeight: "600", fontSize: "16px"}}>TAGS:<span style={{ color: "#0dcaf0", fontWeight: "600",}}>Classic,Casual,V-neck,Loose</span></h5>
                <Card.Text style={{fontSize: "14px"}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of content here', making it look like readable English. uncover many web sites still in their infancy.
                    <Card.Subtitle className='mt-3'>Elasticated cuffs</Card.Subtitle>
                    <Card.Subtitle>Elasticated cuffs</Card.Subtitle>
                    <Card.Subtitle>Casual fit</Card.Subtitle>
                    <Card.Subtitle>100% Cotton</Card.Subtitle>
                    <Card.Subtitle>Free shipping with 4 days develry</Card.Subtitle>
                </Card.Text>
                <Col>
                <div className="d-flex" style={{ width: "100%", height: "100px", margin: "0 auto"}}>
                            <div className="input_field" style={{ width: "160px",  height: "100px", border: "none", outline: "none"}}>
                               <label htmlFor="colour" className='mb-1' style={{ fontWeight: "600", fontSize:"13px"}}>COLOUR</label>
                               <select name="colour" id="colour" className='' style={{height:"33px"}}>
                               <option value="/" selected disabled>Select your Colour</option>
                                   <option value="red">red</option>
                                   <option value="black">black</option>
                                   <option value="yellow">yellow</option>
                                   <option value="orange">orange</option>
                               </select>
                            </div>
                            <div className="input_field mx-3" style={{ width: "160px",  height: "100px", border: "none", outline: "none"}}>
                               <label htmlFor="colour" className='mb-1' style={{ fontWeight: "600", fontSize:"13px"}}>Size</label>
                               <select name="colour" id="colour" className='' style={{height:"33px"}}>
                               <option value="/" selected disabled>Select your Colour</option>
                                   <option value="red">red</option>
                                   <option value="black">black</option>
                                   <option value="yellow">yellow</option>
                                   <option value="orange">orange</option>
                               </select>
                            </div>
                            <div className="input_field" style={{ width: "50px",  height: "100px", border: "none", outline: "none"}}>
                               <label htmlFor="colour" className='mb-1' style={{ fontWeight: "600", fontSize:"13px"}}>QTY</label>
                               <select name="colour" id="colour" className='' style={{height:"33px"}}>
                               <option value="/" selected disabled>QTY</option>
                                   <option value="red">1</option>
                                   <option value="black">2</option>
                                   <option value="yellow">3</option>
                                   <option value="orange">4</option>
                                   <option value="orange">5</option>
                                   <option value="orange">6</option>
                               </select>
                            </div>      
                </div>
                </Col>
                <Col>
                <div className='d-flex'>
                <button className="addto_cart_btn"><BsFillCartPlusFill size="22px"/> ADD TO CART</button>
                <button className="addto_lookbook_btn mx-4"><AiOutlineHeart size="22px" /> ADD TO LOOK BOOK</button>
                </div>
                <button className="add_tocompare mt-3" style={{background: "#fff", border: "none", letterSpacing: "1px", textAlign: "center", fontSize:"12px", fontWeight:"600", }}><AiFillCompass className='mx-2'  size={"22px"}/>ADD TO COMPARE</button>
                </Col>
                </Col>                
                </Col>
            </Col>
            </Row>
            <Row className='my-4'>
                <Col md={12} sm={12} xs={12}>
                    <Col md={12}>
                    <Tabs defaultActiveKey={"tab-1"} className="main_tab black mb-1 p-0 gap-5" style={{background:"#eee9ec", color:"#000",}}>
                    <Tab eventKey={"tab-DESCRIPTION"} title={"DESCRIPTION"}>
                        <h4>Why do we use it?</h4>
                        <p>
                          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                    </Tab>
                    <Tab eventKey={"VIDEO"} title={"VIDEO"}>
                        <h4>Where can I get some?</h4>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                    </Tab>
                    <Tab eventKey={"SIZE & SPACES"} title={"SIZE & SPACES"}>
                            <h4>ما هو "لوريم إيبسوم" ؟</h4>
                            <p>لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس بايج مايكر" (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.</p>
                    </Tab>
                    <Tab className="m-0" eventKey={"DELEVRY 7 RETURN"} title={"DELEVRY 7 RETURN"}>
                    <h4>ما هو "لوريم إيبسوم" ؟</h4>
                            <p>لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس بايج مايكر" (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.</p>
                    </Tab>
                    <Tab eventKey={"REVIEWS"} title={"REVIEWS"}>
                    <h4>ما هو "لوريم إيبسوم" ؟</h4>
                            <p>لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس بايج مايكر" (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.</p>
                    </Tab>
                </Tabs>
                    </Col>
                </Col>
            </Row>
    </Container>
    </section>
    
  )
}

export default Productpage;
