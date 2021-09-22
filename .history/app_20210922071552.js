const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(event) {
    // hide all tab panels
    // mark all tabs as unselected
    // 
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));