import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ScheduleIcon from '@material-ui/icons/Schedule';
import SecurityIcon from '@material-ui/icons/Security';
import GamesIcon from '@material-ui/icons/Games';
import HomeIcon from '@material-ui/icons/Home';

function Navbar() {
	const styles = makeStyles((theme) => ({
		drawerPaper: {width: "inherit"}
	}))
	const classes = styles();
	return (
		<Drawer
				style={{width: "220px"}}
				variant="persistent"
				anchor="left"
				open={true}
				classes={{paper: classes.drawerPaper}}
			>
				<List>
					<ListItem button>
						<ListItemIcon>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary={"Home"} />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<AccountBalanceIcon />
						</ListItemIcon>
						<ListItemText primary={"Balance"} />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<ScheduleIcon />
						</ListItemIcon>
						<ListItemText primary={"Schedule"} />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<SecurityIcon />
						</ListItemIcon>
						<ListItemText primary={"Security"} />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<GamesIcon />
						</ListItemIcon>
						<ListItemText primary={"Games"} />
					</ListItem>
				</List>
			</Drawer>
	)
}

export default Navbar;
