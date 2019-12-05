/**
 * This function manage the navegation between sections in the Single Page App
 * @param from 
 * @param to 
 */
const navegate = (from, to) => {
    let sectionFrom = document.getElementById(from);
    let sectionTo = document.getElementById(to);

    sectionFrom.classList.add('hidden');
    sectionFrom.classList.remove('show');

    sectionTo.classList.remove('hidden');
    sectionTo.classList.add('show');
};