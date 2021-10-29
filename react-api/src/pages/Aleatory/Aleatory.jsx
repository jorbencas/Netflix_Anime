import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Communication from "services";
import "./Aleatory.css";
import "font-awesome/css/font-awesome.min.css";
// import BreadCrumb from '../components/Breadcrumb';
// import Video from '../components/Video';

const Aleatory = () => {
    const location = useLocation();
    const { id, kind, seasion } = useParams();
    const [ elements, setElements ] = useState(null);
    const [ urlId ] = useState(id);

    useEffect(() => {
        let s = "";
        let k = "";
        if (seasion !== undefined) {
            s = `&seasion=${seasion}`;
        }

        if (kind !== undefined) {
            k = "&kind=${kind}";
        }
        let ruta = location.pathname;
        console.log(ruta);
        console.log("*******************");
        console.log("                    ");
        let basePath = 'Episodes';
        if (ruta.includes('openings')) {
            basePath = 'Openings';
        } else if(ruta.includes('endings')){
            basePath = 'Endings';
        }
        Communication.getMethod(1, `${basePath}&ap=${urlId}${k}${s}`)
        .then((res) => {
            setElements(res);
        })
        .catch(() => {
            // dispatch({
            //     type: 'ERROR_USERS',
            //     payload: null
            // })
        });

        return () => {
        setElements(null);
        };
    }, []);

    return (
        <>
        {/* <section className="episode-page">
                <BreadCrumb params={elements} />
                <div className="element video">
                    <div className="element_title">
                        <h1>{elements.num} - {elements.nombre}</h1>
                    </div>
                    <div className="element_video">
                        <Video video={elements.src} poster={elements.poster} />
                    </div>
                    {/*< div className="options">
                        <ul className="options">
                            <?= $v['prev'] ?>
                            <?= $v['next'] ?>
                        </ul>
                    </div> 
                </div>

                    <?php if (isLogged() && ($v['modulo'] == 'aleatory' ||  $v['modulo'] == 'EpisodesDetails')) : ?>
                    <div className="element">
                        <div className="options">
                            <div className="option">
                                <p>Audio: </p>
                                <select name="episode_languaje" id="selector episode" onchange='setlang()'>
                                    <option value="es">Español</option>
                                    <option value="en">Ingles</option>
                                    <option value="va">Valencia</option>
                                </select>
                            </div>
                            <div className="option">
                                <p>Subtitulos: </p>
                                <select name="episode_sub" id="selector episode">
                                    <option value="si">Si</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div className="option actions">
                                <button className='submit' id='remove'><i className="fas fa-minus"></i></button>
                                <input type="number" name="cant" id="cant" min='0' max='100' value='0'>
                                <button className='submit' id='add'><i className="fas fa-plus"></i></button>
                            </div>
                            <div className="option actions">
                                <button className='submit' type="submit"><i className="fas fa-shopping-cart"></i> Añadir al carrito</button>
                            </div>
                        </div>
                    </div>
                    <?= render('Collections')>
                    <?php endif; ?>
                    <?= render('Comments')?>
                    </section> 
            </section> */}
        </>
    );
};

export default Aleatory;