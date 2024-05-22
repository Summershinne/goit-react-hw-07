import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
export default function ContactList() {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);

    const visibleContacts = contacts.filter((contact) => typeof contact.name === "string" && contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
            <ul className={css.listContainer}>{visibleContacts.map((contact) => (
                <li key={contact.id}>
                    <Contact data={contact}/>
                </li>
            )) }</ul>
    
)}