const toggleNav = () => {
    // Sets the current value for whether the nav menu is open to the opposite of what it is
    document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
}