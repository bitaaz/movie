import { makeStyles } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({});

export const useStyles = makeStyles({
  carousel_div: {
    minHeight: "600px",
    marginTop: theme.spacing(11),
    background: "#1c1c1c",

    [theme.breakpoints.down(600)]: {
      marginTop: theme.spacing(7),
    },
    [theme.breakpoints.down(384)]: {
      marginTop: theme.spacing(11),
    },
  },
});

export const contentStyle = makeStyles({
  paper: {
    height: "600px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  container: {
    position: "absolute",
    bottom: "10px",
    height: "250px",
    background: "rgba(0, 0, 0, 0.4)",
    padding: theme.spacing(10),
    marginBottom: theme.spacing(-2),
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      padding: "20px",
    },
  },
  container_div: {
    position: "absolute",
    bottom: "10px",
    top: "5px",
    color: "white",
    maxWidth: "700px",
    minHeight: "100px",
    [theme.breakpoints.down("md")]: {
      minWidth: "100px",
    },
  },

  title: {
    fontSize: "2.3rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.8rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
  },
  overview: {
    fontSize: "1.3rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.0rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
});

// import styled from "styled-components";

// export const Wrapper = styled.div`
// background: linear-gradient(
//       to bottom,
//       rgba(0, 0, 0, 0) 41%,
//       rgba(0, 0, 0, 0.65) 100%
//     ),
//     var(--darkGray);

//   background-image: url(${({ image }) => image});
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   height: 600px;
//   position: relative;
//   animation: animateHeroImage 1s;

//   @keyframes animateHeroImage {
//     from {
//       opacity: 0;
//     }
//     to {
//       opacity: 1;
//     }
//   }
// `;

// export const Content = styled.div`
//   padding: 20px;
//   max-width: var(--maxWidth);
//   margin: 0 auto;
// `;

// export const Text = styled.div`
//   z-index: 100;
//   max-width: 700px;
//   position: absolute;
//   bottom: 40px;
//   margin-right: 20px;
//   min-height: 100px;
//   color: var(--white);

//   h1 {
//     font-size: var(--fontSuperBig);

//     @media screen and (max-width: 720px) {
//       font-size: var(--fontBig);
//     }
//   }

//   p {
//     font-size: var(--fontMed);

//     @media screen and (max-width: 720px) {
//       font-size: var(--fontSmall);
//     }
//   }

//   @media screen and (max-width: 720px) {
//     max-width: 100%;
//   }
// `;
