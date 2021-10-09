import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    marginTop: "10px",
    padding: "10px",
  },
  gridList: {
    flexWrap: "nowrap",
    width: "100%",
    height: "360px",
    overflowY: "hidden",
    overflowX: "hidden",
  },
  title_grid: {
    marginBottom: "10px",
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
}));
