import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    marginTop: "20px",
    padding: "15px",
  },
  gridList: {
    flexWrap: "nowrap",
    width: "100%",
    height: "360px",
    overflowY: "hidden",
    overflowX: "hidden",
  },
  title_grid: {
    paddingLeft: "10px",
  },
  fab: {
    position: "absolute",
    width: "40px",
    height: "40px",
    marginLeft: "5px",
  },
  arrow_button: {
    width: "15px",
    height: "15px",
  },
  title_see_all_grid: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    height: "50px",
    width: "300px",
    marginBottom: "20px",
  },
}));
