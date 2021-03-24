import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import './App.css';

function App() {
    const {handleSubmit, register, watch, errors} = useForm();

    const [counterStrawberry, setCounterStrawberry] = useState(0);
    const [counterBanana, setCounterBanana] = useState(0);
    const [counterApples, setCounterApples] = useState(0);
    const [counterKiwi, setCounterKiwi] = useState(0);

    const selectedFrequency = watch('frequency');

    const [termsAndConditions, toggletermsAndConditions] = React.useState(false);

    function onFormSubmit(data) {
        console.log(data, `Strawberry ${counterStrawberry}`, `Banana ${counterBanana}`, `Apples ${counterApples}`, `Kiwi's ${counterKiwi}`);
    }

    function resetButton() {
        setCounterStrawberry(0)
        setCounterBanana(0)
        setCounterApples(0)
        setCounterKiwi(0)
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>

            {/********************************STRAWBERRY**********************************************************************/}
            <article className="product">
                🍓 Aardbeien
                <button
                    type="button"
                    className="buttonCounter"
                    name="buttonDecrease"
                    onClick={() => (counterStrawberry > 0 ? setCounterStrawberry(counterStrawberry - 1) : setCounterStrawberry(0))}>
                    -
                </button>

                <div>{counterStrawberry}</div>

                <button
                    type="button"
                    className="buttonCounter"
                    name="buttonIncrease"
                    onClick={() => setCounterStrawberry(counterStrawberry + 1)}>
                    +
                </button>
            </article>

            {/********************************BANANA**********************************************************************/}
            <article className="product">
                🍌 Bananen
                <button
                    type="button"
                    className="buttonCounter"
                    name="buttonDecrease"
                    onClick={() => (counterBanana > 0 ? setCounterBanana(counterBanana - 1) : setCounterBanana(0))}>
                    -
                </button>

                <div>{counterBanana}</div>

                <button
                    type="button"
                    className="buttonCounter"
                    name="buttonIncrease"
                    onClick={() => setCounterBanana(counterBanana + 1)}>
                    +
                </button>
            </article>

            {/********************************APPLES**********************************************************************/}
            <article className="product">
                🍏 Appels
                <button
                    type="button"
                    className="buttonCounter"
                    name="buttonDecrease"
                    onClick={() => (counterApples > 0 ? setCounterApples(counterApples - 1) : setCounterApples(0))}>
                    -
                </button>

                <div>{counterApples}</div>


                <button
                    type="button"
                    className="buttonCounter"
                    name="buttonIncrease"
                    onClick={() => setCounterApples(counterApples + 1)}>
                    +
                </button>
            </article>

            {/********************************KIWI**********************************************************************/}
            <article className="product">
                🥝 Kiwi's
                <button
                    type="button"
                    className="buttonCounter"
                    name="buttonDecrease"
                    onClick={() => (counterKiwi > 0 ? setCounterKiwi(counterKiwi - 1) : setCounterKiwi(0))}>
                    -
                </button>

                <div>{counterKiwi}</div>

                <button
                    type="button"
                    className="buttonCounter"
                    name="buttonIncrease"
                    onClick={() => setCounterKiwi(counterKiwi + 1)}>
                    +
                </button>
            </article>

            {/********************************RESET BUTTON**********************************************************************/}
            <button
                type="reset"
                id="buttonReset"
                onClick={resetButton}>
                Reset all
            </button>

            {/********************************FIRST NAME*************************************************************************/}
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <label className="detailsPerson" htmlFor="detailsFirstName">
                    Voornaam

                    <input
                        type="text"
                        name="detailsFirstName"
                        id="detailsFirstName"
                        ref={register(
                            {
                                required: {
                                    value: true,
                                    message: 'Dit veld mag niet leeg zijn.',
                                },
                            }
                        )}
                    />
                </label>
                {errors.detailsFirstName && <p>⚠️{errors.detailsFirstName.message}</p>}

                {/********************************LAST NAME*************************************************************************/}
                <label className="detailsPerson" htmlFor="detailsLastName">
                    Achternaam

                    <input
                        type="text"
                        name="detailsLastName"
                        id="detailsLastName"
                        ref={register(
                            {
                                required: {
                                    value: true,
                                    message: "Dit veld mag niet leeg zijn.",
                                },
                            }
                        )}
                    />
                </label>
                {errors.detailsLastName && <p>⚠️{errors.detailsLastName.message}</p>}

                {/********************************AGE*****************************************************************************/}
                <label className="detailsPerson" htmlFor="detailsAge">
                    Leeftijd

                    <input
                        type="number"
                        name="detailsAge"
                        id="detailsAge"
                        ref={register(
                            {
                                required: {
                                    value: true,
                                    message: "Dit veld mag niet leeg zijn",
                                },
                                min: {
                                    value: 18,
                                    message: "De minimale leeftijd is 18 jaar.",
                                },
                            }
                        )}
                    />
                </label>
                {errors.detailsAge && <p>⚠️{errors.detailsAge.message}</p>}

                {/********************************POSTCODE*************************************************************************/}
                <label className="detailsPerson" htmlFor="detailsZipCode">
                    Postcode

                    <input
                        type="text"
                        name="detailsZipCode"
                        id="detailsZipCode"
                        ref={register(
                            {
                                required: {
                                    value: true,
                                    message: "Dit veld mag niet leeg zijn.",
                                },
                                validate:
                                    function value(value) {
                                        const zipReg = (/^[1-9][0-9]{3}[/s]?(?!sa|sd|ss)[a-z]{2}$/i)
                                        if (!zipReg.test(value)) {
                                            return "Een postcode bestaat uit 4 cijfers en 2 letters.";
                                        }
                                    }
                            }
                        )}

                    />
                </label>
                {errors.detailsZipCode && <p>⚠️{errors.detailsZipCode.message}</p>}

                {/********************************HOUSE NUMBER***********************************************************************/}
                <label className="detailsPerson" htmlFor="detailsHouseNumber">
                    Huisnummer

                    <input
                        type="number"
                        name="detailsHouseNumber"
                        id="detailsHouseNumber"
                        placeholder="zonder toevoeging"
                        ref={register(
                            {
                                required: {
                                    value: true,
                                    message: "Dit veld mag niet leeg zijn."
                                },
                            }
                        )}
                    />
                </label>
                {errors.detailsHouseNumber && <p>⚠️{errors.detailsHouseNumber.message}</p>}

                {/********************************DELIVERY FREQUENCY****************************************************************/}
                <label htmlFor="deliveryOptions">
                    Bezorgfrequentie

                    <ul>
                        <input
                            type="radio"
                            id="weekly"
                            name="frequency"
                            value="weekly"
                            ref={register(
                                {
                                    required: {
                                        value: true,
                                        message: "Dit veld mag niet leeg zijn."
                                    },
                                }
                            )}
                        />
                        {errors.frequency && <p>⚠️{errors.frequency.message}</p>}
                        <label htmlFor="weekly">Iedere week</label>

                        <input
                            type="radio"
                            id="biWeekly"
                            name="frequency"
                            value="Biweekly"
                            ref={register(
                                {
                                    required: {
                                        value: true,
                                        message: "Dit veld mag niet leeg zijn."
                                    },
                                }
                            )}
                        />
                        {errors.frequency && <p>⚠️{errors.frequency.message}</p>}
                        <label htmlFor="biWeekly">Om de Week</label>

                        <input
                            type="radio"
                            id="monthly"
                            name="frequency"
                            value="monthly"
                            ref={register(
                                {
                                    required: {
                                        value: true,
                                        message: "Dit veld mag niet leeg zijn."
                                    },
                                }
                            )}
                        />
                        {errors.frequency && <p>⚠️{errors.frequency.message}</p>}
                        <label htmlFor="monthly">Iedere maand</label>

                        <input
                            type="radio"
                            id="different"
                            name="frequency"
                            value="different"
                            ref={register(
                                {
                                    required: {
                                        value: true,
                                        message: "Dit veld mag niet leeg zijn."
                                    },
                                }
                            )}
                        />
                        {errors.frequency && <p>⚠️{errors.frequency.message}</p>}
                        <label htmlFor="deliveryFrequencyDifferent">Anders</label>
                    </ul>
                </label>
                {selectedFrequency === "different" && (
                    <input
                        type="text"
                        name="differentFrequency"
                        ref={register(
                            {
                                required: {
                                    value: true,
                                    message: "Dit veld mag niet leeg zijn."
                                },
                            }
                        )}
                    />
                )}
                {errors.differentFrequency && <p>⚠️{errors.differentFrequency.message}</p>}

                {/********************************REMARKS*************************************************************************/}
                <label htmlFor="remarks">
                    Opmerking

                    <textarea
                        name="remarks"
                        id="remarks"
                        rows="4"
                        cols="40"
                        ref={register}
                    />
                </label>

                {/********************************TERMS CHECKBOX*******************************************************************/}
                <label htmlFor="terms-and-conditions">
                    <input
                        type="checkbox"
                        name="terms-and-conditions"
                        id="terms-and-conditions"
                        ref={register}
                        onChange={() => toggletermsAndConditions(!termsAndConditions)}
                    />

                    Ik ga akkoord met de algemene voorwaarden
                </label>

                {/********************************SUBMIT BUTTON*********************************************************************/}
                <button
                    id="buttonSubmit"
                    type="submit"
                    disabled={!termsAndConditions}
                >
                    Verstuur
                </button>
            </form>
        </>
    );
}

export default App;


