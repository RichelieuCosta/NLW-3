import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet'

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';

import 'leaflet/dist/leaflet.css'

function OrphanagesMap() {

    return (

        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Paraíba</strong>
                    <span>João Pessoa</span>
                </footer>
            </aside>
            <Map
                center={[-7.1625076,-34.8166385]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                   {/* outra opção é o mapbox.com, criando uma conta e uma chave. Ele é mais bonito, permite uso de estilos e etc */}
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>

    );
    
}

export default OrphanagesMap;