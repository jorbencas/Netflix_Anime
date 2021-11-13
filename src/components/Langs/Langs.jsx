import React, { useEffect, useState } from 'react';
import Communication from 'services/index';
import 'components/Langs/Langs.css';

const Langs = () => {
    const [langs, setLangs] = useState([]);
    
    useEffect(() => {
        Communication.getMethod(1,`Langs`, {
            "action" : "gettranslations", 
            "code" : 1, 
            "translations" : [
                {"kind" : "langs"}
            ]
        }).then(res => {
            setLangs(res);
        })
        .catch(() => {
            // dispatch({
            //     type: 'ERROR_USERS',
            //     payload: null
            // })
        })
        return () => {
            setLangs([]);
        }
    }, []);

    return (
        <section className="header">
            <ul className="langs">
                {
                    langs.map((lang, key) => {
                        const activeClass = lang.code === 'es' ? 'active' :  '';
                        return ( <li key={key} className={activeClass + ' list_element'}><a className='link' href="es">{lang[lang['kind']]}</a> </li>);
                    })
                }
            </ul>
        </section>
    )
}

export default Langs;