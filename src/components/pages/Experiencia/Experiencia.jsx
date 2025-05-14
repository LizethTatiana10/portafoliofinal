import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Experiencia.css';



export function Experiencia() {
    return (
        <>  
            <section className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        <h2>Mi Experiencia</h2>
                        <hr />
                    </div>
                </div>
            </section>

            <section className="container mb-4">
                <div className="row">
                    <div className="col-12">
                        <div className="progress" role="progressbar">
                            <div className="progress-bar barra" style={{width: '50%'}}>50%</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="row my-5">
                    <div className="col-md-6 mb-4">
                        <div className="card shadow h-100">
                            <div className="card-body">
                                <h3 className="card-title">Uso de Git</h3>
                                <ul className="list-unstyled">
                                    <li>Control de versiones</li>
                                    <li>git init, git add, git commit git status, git log</li>
                                    <li>Repositorios</li>
                                    <li>instalar dependencias</li>
                                </ul>
                                <div className="progress mt-3" role="progressbar">
                                    <div className="progress-bar barra" style={{width: '20%'}}>20%</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="card shadow h-100">
                            <div className="card-body">
                                <h3 className="card-title">React</h3>
                                <ul className="list-unstyled">
                                    <li>¿Qué es React?</li>
                                    <li>JSX</li>
                                    <li>Componentes</li>
                                    <li>React-router-DOM</li>
                                </ul>
                                <div className="progress mt-3" role="progressbar">
                                    <div className="progress-bar barra" style={{width: '30%'}}>30%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-md-6 mb-4">
                        <div className="card shadow h-100">
                            <div className="card-body">
                                <h3 className="card-title">Lógica de programación</h3>
                                <ul className="list-unstyled">
                                    <li>Pensamiento lógico y secuencial</li>
                                    <li>Algoritmos (pasos ordenados para resolver un problema)</li>
                                    <li>Pseudocódigo</li>
                                    <li>Diagramas de flujo</li>
                                    <li>Tipos de datos básicos</li>
                                    <li>Operadores lógicos y aritméticos</li>
                                    <li>Estructuras condicionales</li>
                                    <li>Bucles o ciclos</li>
                                    <li>Estructuras de datos simples</li>
                                </ul>
                                <div className="progress mt-3" role="progressbar">
                                    <div className="progress-bar barra" style={{width: '70%'}}>70%</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="card shadow h-100">
                            <div className="card-body">
                                <h3 className="card-title">Base de datos</h3>
                                <ul className="list-unstyled">
                                    <li>Qué es una base de datos</li>
                                    <li>Tipos de bases de datos</li>
                                    <li>Modelo entidad-relación</li>
                                    <li>Lenguaje SQL básico</li>
                                    <li>Tablas, filas, columnas</li>
                                    <li>Claves primarias y foráneas</li>
                                    <li>Normalización</li>
                                </ul>
                                <div className="progress mt-3" role="progressbar">
                                    <div className="progress-bar barra" style={{width: '40%'}}>40%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-md-6 mb-4">
                        <div className="card shadow h-100">
                            <div className="card-body">
                                <h3 className="card-title">Maquetación HTML + CSS</h3>
                                <ul className="list-unstyled">
                                    <li>Estructura básica de un documento HTML</li>
                                    <li>Etiquetas principales</li>
                                    <li>Selectores y propiedades CSS</li>
                                    <li>Box model</li>
                                    <li>Colores, tipografía, tamaños</li>
                                    <li>Flexbox</li>
                                    <li>Pseudoclases y pseudoelementos</li>
                                    <li>Animaciones y transiciones CSS</li>
                                    <li>Responsive design</li>
                                    <li>Uso de íconos y fuentes externas</li>
                                </ul>
                                <div className="progress mt-3" role="progressbar">
                                    <div className="progress-bar barra" style={{width: '70%'}}>70%</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="card shadow h-100">
                            <div className="card-body">
                                <h3 className="card-title">Programación JS</h3>
                                <ul className="list-unstyled">
                                    <li>Sintaxis general</li>
                                    <li>Variables</li>
                                    <li>Tipos de datos, operadores</li>
                                    <li>Variables (var, let, const)</li>
                                    <li>Condicionales y bucles</li>
                                    <li>Funciones básicas</li>
                                </ul>
                                <div className="progress mt-3" role="progressbar">
                                    <div className="progress-bar barra" style={{width: '50%'}}>50%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}