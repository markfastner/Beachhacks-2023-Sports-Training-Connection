// import React, { Component } from "react";
// import styled, { css } from "styled-components";
// import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

// function Untitled(props) {
//   return (
//     <Image2 src={require("../assets/images/R.jpeg")} resizeMode="contain">
//       <ButtonStackRow>
//         <ButtonStack>
//           <Button>
//             <ButtonOverlay></ButtonOverlay>
//           </Button>
//           <Discover>Discover</Discover>
//         </ButtonStack>
//         <Button2Stack>
//           <Button2>
//             <ButtonOverlay></ButtonOverlay>
//           </Button2>
//           <Connect>Connect</Connect>
//         </Button2Stack>
//         <Button3Stack>
//           <Button3>
//             <ButtonOverlay></ButtonOverlay>
//           </Button3>
//           <ContactUs>Contact Us</ContactUs>
//         </Button3Stack>
//         <Button4Stack>
//           <Button4>
//             <ButtonOverlay></ButtonOverlay>
//           </Button4>
//           <Login>Login</Login>
//         </Button4Stack>
//       </ButtonStackRow>
//       <RectStackRow>
//         <RectStack>
//           <Rect></Rect>
//           <LoremIpsum>Exercise with a purpose.</LoremIpsum>
//         </RectStack>
//         <Button5>
//           <ButtonOverlay>
//             <SignUp>Sign Up!</SignUp>
//           </ButtonOverlay>
//         </Button5>
//       </RectStackRow>
//       <MaterialCommunityIconsIcon
//         name="home"
//         style={{
//           color: "rgba(128,128,128,1)",
//           fontSize: 40,
//           height: 43,
//           width: 40,
//           marginTop: 475,
//           marginLeft: 1526
//         }}
//       ></MaterialCommunityIconsIcon>
//     </Image2>
//   );
// }

// const Image2 = styled.img`
//   display: flex;
//   width: 2113px;
//   height: 965px;
//   flex-direction: column;
//   margin-top: -92px;
//   margin-left: -364px;
// `;

// const ButtonOverlay = styled.button`
//  display: block;
//  background: none;
//  height: 100%;
//  width: 100%;
//  border:none
//  `;
// const Button = styled.div`
//   top: 0px;
//   left: 0px;
//   width: 266px;
//   height: 57px;
//   position: absolute;
//   background-color: rgba(156,0,0,1);
//   border-radius: 15px;
//   shadow-radius: 0px;
//   border: none;
//   box-shadow: 3px 3px 0px  0.37px rgba(0,0,0,1) ;
// `;

// const Discover = styled.span`
//   font-family: Akshar;
//   top: 0px;
//   left: 47px;
//   position: absolute;
//   font-style: normal;
//   font-weight: 400;
//   color: rgba(255,255,255,1);
//   font-size: 45px;
// `;

// const ButtonStack = styled.div`
//   width: 266px;
//   height: 62px;
//   margin-top: 3px;
//   position: relative;
// `;

// const Button2 = styled.div`
//   top: 3px;
//   left: 0px;
//   width: 266px;
//   height: 57px;
//   position: absolute;
//   background-color: rgba(160,9,9,1);
//   border-radius: 13px;
//   shadow-radius: 0px;
//   border: none;
//   box-shadow: 3px 3px 0px  0.27px rgba(0,0,0,1) ;
// `;

// const Connect = styled.span`
//   font-family: Akshar;
//   top: 0px;
//   left: 61px;
//   position: absolute;
//   font-style: normal;
//   font-weight: 400;
//   color: rgba(255,255,255,1);
//   font-size: 45px;
// `;

// const Button2Stack = styled.div`
//   width: 266px;
//   height: 62px;
//   margin-left: 37px;
//   position: relative;
// `;

// const Button3 = styled.div`
//   top: 3px;
//   left: 0px;
//   width: 289px;
//   height: 57px;
//   position: absolute;
//   background-color: rgba(168,9,9,1);
//   border-radius: 16px;
//   shadow-radius: 0px;
//   border: none;
//   box-shadow: 3px 3px 0px  0.26px rgba(0,0,0,1) ;
// `;

// const ContactUs = styled.span`
//   font-family: Akshar;
//   top: 0px;
//   left: 49px;
//   position: absolute;
//   font-style: normal;
//   font-weight: 400;
//   color: rgba(255,255,255,1);
//   font-size: 45px;
// `;

// const Button3Stack = styled.div`
//   width: 289px;
//   height: 62px;
//   margin-left: 37px;
//   position: relative;
// `;

// const Button4 = styled.div`
//   top: 0px;
//   left: 0px;
//   width: 289px;
//   height: 57px;
//   position: absolute;
//   background-color: rgba(170,10,10,1);
//   border-radius: 14px;
//   shadow-radius: 0px;
//   border: none;
//   box-shadow: 3px 3px 0px  0.3px rgba(0,0,0,1) ;
// `;

// const Login = styled.span`
//   font-family: Akshar;
//   top: 0px;
//   left: 55px;
//   position: absolute;
//   font-style: normal;
//   font-weight: 400;
//   color: rgba(255,255,255,1);
//   font-size: 45px;
// `;

// const Button4Stack = styled.div`
//   width: 289px;
//   height: 62px;
//   margin-left: 44px;
//   margin-top: 3px;
//   position: relative;
// `;

// const ButtonStackRow = styled.div`
//   height: 65px;
//   flex-direction: row;
//   display: flex;
//   margin-top: 89px;
//   margin-left: 470px;
//   margin-right: 415px;
// `;

// const Rect = styled.div`
//   top: 0px;
//   left: 0px;
//   width: 971px;
//   height: 135px;
//   position: absolute;
//   background-color: rgba(52,31,174,1);
//   border-width: 0px;
//   border-color: #000000;
//   border-style: dotted;
//   border-radius: 39px;
//   box-shadow: 3px 3px 100px  0.42px rgba(0,0,0,1) ;
// `;

// const LoremIpsum = styled.span`
//   font-family: Anek Malayalam;
//   top: 18px;
//   position: absolute;
//   font-style: normal;
//   font-weight: 400;
//   color: rgba(255,255,255,1);
//   font-size: 94px;
//   left: 8px;
// `;

// const RectStack = styled.div`
//   width: 971px;
//   height: 153px;
//   margin-top: 126px;
//   position: relative;
// `;

// const Button5 = styled.div`
//   width: 142px;
//   height: 183px;
//   background-color: rgba(171,10,10,1);
//   border-radius: 22px;
//   shadow-radius: 0px;
//   flex-direction: column;
//   display: flex;
//   margin-left: 59px;
//   border: none;
//   box-shadow: 3px 3px 0px  0.26px rgba(0,0,0,1) ;
// `;

// const SignUp = styled.span`
//   font-family: Akshar;
//   font-style: normal;
//   font-weight: 400;
//   color: rgba(255,255,255,1);
//   font-size: 38px;
//   margin-top: 80px;
//   margin-left: 13px;
// `;

// const RectStackRow = styled.div`
//   height: 279px;
//   flex-direction: row;
//   display: flex;
//   margin-top: 14px;
//   margin-left: 526px;
//   margin-right: 415px;
// `;

// export default Untitled;
