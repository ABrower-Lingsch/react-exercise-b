function ContactList({contacts}) {

    const contactsList = contacts.map(({id, first, last, address, phone}) => (
        <li key={id}>
            <div id={id}>{first}</div>
            <div id={id}>{last}</div>
            <div id={id}>{address}</div>
            <div id={id}>{phone}</div>
            
        </li>
    ));

    return (
        <ul>
            {contactsList}
        </ul>
    );

}

export default ContactList;