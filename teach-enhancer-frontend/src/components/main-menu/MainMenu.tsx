import React from "react";
import "./MainMenu.scss";
import {Button} from "@mui/material";
import PrimaryButton from "../shared-ui-components/buttons/primary-button/PrimaryButton";

export default function MainMenu() {
    return (
        <header className="main-menu">
            <PrimaryButton label={'Home'} onClick={() => { location.href = '/home'; }}></PrimaryButton>
            <Button variant="contained" href="/tasks">
                Tasks
            </Button>
        </header>
    );
}
