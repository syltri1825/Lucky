import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import MyChart from '../component/MyChart';
import Table  from '../component/Table'



const StartGame = () => { 
    let luckyParams = useParams().id
    let luckyTitle = useParams().ib
    const navigate = new useNavigate()
    const [gameTitle,setGameTitle] = useState(luckyTitle)
    const [reactivePage,setReactivePage] = useState({
        loader: '',
        status: false,
        text: '',
        animation: '',
        rotation: null,
        luckyTitle: '',
        resultVal: null,
        start: false,
        table: []
    })
    const [textResult,setTextResult] = useState('')
    const [valResult,setValResult] = useState(null)
    const [status,setStatus] = useState(false)
    const [start,setStart] = useState(false)
    const [fv,setFv] = useState(0)
    const [te,setTe] = useState(0)
    const [tw,setTw] = useState(0)
    const [fi,setFi] = useState(0)
    const [progress,setProgress] = useState(0)


    const [sta,setSta] = useState(false)
    let titleAtLoad;
    let rotateValue;
    const [controlAnimation,setControlAnimation] = useState(false)

    // const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    // const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))







    useEffect(() => {
        let luckyGameClockCookie = sessionStorage.getItem('lucky-cookie')

        if(!luckyGameClockCookie){
            navigate('/redirect')
        }
    },[])

    useEffect(() => {
        titleAtLoad = sessionStorage.getItem('title-game')

        if(titleAtLoad) setGameTitle(titleAtLoad)
        
    }, [])


    

    const changeTitleAtClick = (e) => {
        e.preventDefault()

        document.
        getElementById('editTitle').disabled = true
        document.
        getElementById('modification-title-div').
        classList.remove('d-none') 
        document.
        getElementById('game-title').
        classList.toggle('d-none') 
    }

    const titleInput = (e) => {
        e.preventDefault()

        setGameTitle(e.target.value)
    }

    const titleChange = (e) => {
        e.preventDefault()

        setGameTitle(e.target.value)
    }

    const saveTitle = (e) => {
        e.preventDefault()

        document.
        getElementById('editTitle').disabled = false
        document.
        getElementById('modification-title-div').
        classList.toggle('d-none') 
        document.
        getElementById('game-title').
        classList.remove('d-none') 

        sessionStorage.setItem('title-game',gameTitle)
    }

    const navigateToChoice = (e) => {
        e.preventDefault()

        titleAtLoad = sessionStorage.getItem('title-game')
        if(titleAtLoad) sessionStorage.removeItem('title-game')

        navigate(`/Choices`)
    }

    const navigateToPlay = (e, paramsA,paramsB) => {
        e.preventDefault()

        navigate(`/Play/${paramsA}/${paramsB}`)
    }



    const startNow = (e) => {
        e.preventDefault()

        document.getElementById('beforePlay')?.classList.toggle('d-none')
        document.getElementById('editTitle').disabled = false
        manageGame()

        setTimeout(() => {
            if(!document.getElementById('modification-title-div')?.classList.contains('d-none')){
                document.
                getElementById('modification-title-div').
                classList.toggle('d-none') 
                document.
                getElementById('game-title').
                classList.remove('d-none') 
                document.
                getElementById('editTitle').disabled = false
                // document.
                // getElementById('beforePlay').
                // classList.toggle('d-none')
            }
        }, 0);

    }


    const manageGame = () => {
        if(luckyParams == '5'){
            let getValueA

            Table.myConditionA.forEach(element => {
                if(element == Table.myConditionA[fv]){
                    getValueA = element
                } 
                setFv(fv + 1)
            })


            setTimeout(() => {
                setReactivePage({
                    ...reactivePage,
                    text: 'Bonne chance',
                    animation: 'rotate 7s linear infinite',
                    rotation: getValueA,
                    start: true,
                    angleTable: Table.rowTableA,
                    numberTable: Table.myTableA
                })
            }, 0);

            setTimeout(() => {
                setReactivePage({
                    ...reactivePage,
                    text: '',
                    animation: '',
                    rotation: null,
                    resultVal: null,
                    start: false,
                })
            }, 2000);

            setTimeout(() => {
                document.getElementById('displayText')?.classList.remove('d-none')
            }, 0);

            setTimeout(() => {
                document.getElementById('displayText')?.classList.toggle('d-none')
            }, 1000);

            setTimeout(() => {
                if(fv == 29){
                    setFv(0)
                }
            }, 0);
            
        }
        if(luckyParams == '10'){
            let getValueB

            Table.myConditionB.forEach(element => {
                if(element == Table.myConditionB[te]){
                    getValueB = element
                } 
                setTe(te + 1)
            })

            setTimeout(() => {
                setReactivePage({
                    ...reactivePage,
                    text: 'Bonne chance',
                    animation: 'rotate 7s linear infinite',
                    rotation: getValueB,
                    start: true,
                    angleTable: Table.rowTableB,
                    numberTable: Table.myTableB
                })
            }, 0);

            setTimeout(() => {
                setReactivePage({
                    ...reactivePage,
                    text: '',
                    animation: '',
                    rotation: null,
                    resultVal: null,
                    start: false,
                })
            }, 2000);

            setTimeout(() => {
                document.getElementById('displayText')?.classList.remove('d-none')
            }, 0);

            setTimeout(() => {
                document.getElementById('displayText')?.classList.toggle('d-none')
            }, 1000);

            setTimeout(() => {
                if(te == 29){
                    setTe(0)
                }
            }, 0);
        }
        if(luckyParams == '12'){
            let getValueC
            
            Table.myConditionC.forEach(element => {
                if(element == Table.myConditionC[tw]){
                    getValueC = element
                } 
                setTw(tw + 1)
            })

            setTimeout(() => {
                setReactivePage({
                    ...reactivePage,
                    text: 'Bonne chance',
                    animation: 'rotate 7s linear infinite',
                    rotation: getValueC,
                    start: true,
                    angleTable: Table.rowTableC,
                    numberTable: Table.myTableC
                })
            }, 0);

            setTimeout(() => {
                setReactivePage({
                    ...reactivePage,
                    text: '',
                    animation: '',
                    rotation: null,
                    resultVal: null,
                    start: false,
                })
            }, 2000);

            setTimeout(() => {
                document.getElementById('displayText')?.classList.remove('d-none')
            }, 0);

            setTimeout(() => {
                document.getElementById('displayText')?.classList.toggle('d-none')
            }, 1000);

            setTimeout(() => {
                if(tw == 29){
                    setTw(0)
                }
            }, 0);
        }
        if(luckyParams == '15'){
            let getValueD
            
            Table.myConditionD.forEach(element => {
                if(element == Table.myConditionD[fi]){
                    getValueD = element
                } 
                setFi(fi + 1)
            })

            setTimeout(() => {
                setReactivePage({
                    ...reactivePage,
                    text: 'Bonne chance',
                    animation: 'rotate 7s linear infinite',
                    rotation: getValueD,
                    start: true,
                    angleTable: Table.rowTableD,
                    numberTable: Table.myTableD
                })
            }, 0);

            setTimeout(() => {
                setReactivePage({
                    ...reactivePage,
                    text: '',
                    animation: '',
                    rotation: null,
                    resultVal: null,
                    start: false,
                })
            }, 2000);

            setTimeout(() => {
                document.getElementById('displayText')?.classList.remove('d-none')
            }, 0);

            setTimeout(() => {
                document.getElementById('displayText')?.classList.toggle('d-none')
            }, 1000);

            setTimeout(() => {
                if(fi == 29){
                    setFi(0)
                }
            }, 0);    
        }
    }

    const updateText = (params) => {
        if(params){
            document.
            getElementById('beforePlay')?.
            classList.remove('d-none')
        }
    }


    const generateRotateValue = (params) => {
        let alertValue = Math.floor(Math.random() * (355 - 0 + 1) + 0)
        return Math.floor(alertValue)
    }

    const generateResultValue = (currentAngle, angleRanges, winningNumbers) => {
        for (let i = 0; i < angleRanges.length; i++) {
            const {minDeg, maxDeg, value } = angleRanges[i];
    

            if (currentAngle >= minDeg && currentAngle <= maxDeg) {
                
                if (winningNumbers.includes(value)) {
                    return value;
                }
            }
        }
    
        return null; 
    }

    
    const getPlageAngle = (numberOfSections) => {
        const angleParSection = 360 / numberOfSections;

        const wheelSections = Array.from({ length: numberOfSections }, (_, index) => {
            const minDeg = index * angleParSection;
            const maxDeg = (index + 1) * angleParSection;
            let control = index + 2

            if(control == 6){
                control = 2
                const minDeg = index * angleParSection;
                const maxDeg = (index + 1) * angleParSection;
                return {
                    value: control,
                    minDeg,
                    maxDeg,
                };
            }
            else{
                return {
                    value: control,
                    minDeg,
                    maxDeg,
                };
            }
        });

        return wheelSections
    }




    return(
        <>
            {/* <button 
                className='button-info' 
                data-bs-container="body" 
                data-bs-toggle="popover" 
                data-bs-placement="left" 
                data-bs-content=" Jouer à lucky game autant que vous voulez! Choisissez juste un numéro et après avoir lancer le jeu, attendez l'arrêt du roue pour connaître le résultat. Vous pouvez aussi modifier le nom du du joueur en appuyant sur le boutton éditer."
            >
                <i className='bi bi-info'/>
            </button> */}

    
            <section>
                <header className='d-flex flex-row justify-content-center align-items-center text-center mar-app'>
                    <div className='col pt-4 position-absolute'>
                        <button id='game-title' disabled className="button-a">
                            {gameTitle}
                        </button>
                    </div>
                    <div id='modification-title-div' className='col pt-4 position-absolute d-none'>
                        <div className='row gap-0 text-start'>
                            <div className='col-8'>
                                <form id='form-title'>
                                    <input
                                        onInput={titleInput}
                                        onChange={titleChange} 
                                        id='title-input' 
                                        name='title' 
                                        value={gameTitle}
                                        className="form-control form-control-sm"
                                    />
                                </form>
                            </div>
                            <div className='col-4'>
                                <button onClick={saveTitle} className="btn btn-light btn-sm">Enregistrer</button>
                            </div>
                        </div>
                    </div>
                </header>

                <MyChart
                    action={reactivePage}
                    luckyChoice={luckyParams}
                    rule='one-lucky'
                    updateText={updateText}
                ></MyChart>

                <br/><br/>
                    
                <div className="d-flex justify-items-center align-items-center text-center row row-cols-2 position-absolute marg-action" id='beforePlay'>
                    <div>
                        <button title={'cliquer pour démarrer le jeu'} 
                        id='play'
                        onClick={startNow}
                        className="button-j">Jouer</button>
                    </div>
                    <div>
                        <button id="editTitle" title="modifier le titre" onClick={changeTitleAtClick} className="button-e">Editer</button>
                    </div>
                </div>


                {
                    reactivePage.text != '' ?
                    (<div className="modal position-static d-block bg-transparent p-4 py-md-5 z-3" tabIndex="-1" role="dialog" id="modalChoice">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content rounded-3 shadow">
                                <div className="modal-body p-4 text-black text-center">
                                    <p className="mb-0">{reactivePage.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>)
                    : ''
                }


                <div className="d-flex position-absolute mt-5 py-5 marg-action-back">
                    <button 
                        onClick={navigateToChoice}
                        className="button-d"
                        style={{transform: 'translateX(-100px)'}}
                    >
                        <i className="bi bi-arrow-left"></i>
                    </button>
                </div>
                
            </section>
        </>
    )
}

export default StartGame