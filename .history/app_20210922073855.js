const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(event) {
    // hide all tab panels
    tabPanels.forEach(panel => {
        panel.hidden = true;
    });
    // mark all tabs as unselected
    tabButtons.forEach(tab => {
        //tab.ariaSelected = false;
        tab.setAttribute('aria-selected', false);
    })
    // mark the clicked tab as selected
    event.currentTarget.setAttribute('aria-selected', true);
    // find the associated tabPanel and show it
    const { id } = event.currentTarget;
    console.log(id)
    const tabPanel = tabs.querySelector(`[aria-labelledby="]`)
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));