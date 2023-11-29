import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import fondoMadera from "./assets/fondomadera.jpg";

import Clock from "./assets/clock.jpg";

import Pato from "./assets/pato.png";

import Licuadora from "./assets/licuadora.jpg";

import Arroz from "./assets/arroz.jpg";
import Casera from "./assets/caseraJorgex.jpg";
import Agua from "./assets/agua.jpg";
import ArrozCocido from "./assets/arrozCocido.jpg";
import Urucu from "./assets/urucu.jpg";
import Keperi from "./assets/keperi.jpg";

import Queso from "./assets/queso.jpg";

import Leche from "./assets/leche.jpg";
import Carne from "./assets/carne.jpg";
import Limon from "./assets/limon.jpg";
import Platano from "./assets/banana.jpg";
import Charque from "./assets/charque.jpg";
import Huevo from "./assets/huevo.png";
import pollo from "./assets/pollo.png";
import polloCocinado from "./assets/polloCocinado.png";

import ArrozConQuesoImg from "./assets/arrozConQueso.jpg";

import Horno from "./assets/horno.png";
import Sarten from "./assets/sarten.jpg";

import ArrozTintadoImg from "./assets/arrozTintado.jpg";
import Eliminar from "./Eliminar/Eliminar";
import Recetario from "./Recetario/Recetario";

import MajaditoCharque from "./assets/majaditoCharque.png";
import MajaditoPollo from "./assets/majaditoPollo.png";
import mesa1 from "./assets/mesaverde.jpg";
import mesa2 from "./assets/mesalila.jpg";
import mesa3 from "./assets/mesaamarilla.jpg";

import piso1 from "./assets/piso1.jpg";
import piso2 from "./assets/piso2.jpg";
import piso3 from "./assets/piso3.jpg";

import florero from "./assets/florero.jpg";
import mesa from "./assets/table.jpg";

import redpattern from "./assets/patternrojo.jpg";
import greenpattern from "./assets/patterngreen.jpg";
import mangopattern from "./assets/patternmango.jpg";

import estrella from "./assets/estrella.png";

import Peanut from "./assets/peanut.jpg";

function App() {
  const [mesas, setMesas] = useState([]);
  const [decoraciones, setDecoraciones] = useState([]);
  const [puntuacion, setPuntuacion] = useState(1000);
  const [puntosEstilo, setPuntosEstilo] = useState(0);
  const [estrellas, setEstrellas] = useState(0);

  const [VisibleRecetario, setVisibleRecetario] = useState(false);
  const [VisibleTienda, setVisibleTienda] = useState(false);
  const [VisibleLogros, setVisibleLogros] = useState(false);
  const [VisibleInventario, setVisibleInventario] = useState(false);
  const [enciclopedia, setEnciclopedia] = useState(false);

  

  const [visibleMiRestaurante, setVisibleMiRestaurante] = useState(false);

  const recetaMajadito = {
    nombre: "Majadito de Charque",
    descripcion:
      "El majadito es un plato típico de Bolivia, especialmente de la región de Santa Cruz. Se trata de un plato de arroz con charque (carne seca) y huevo frito. Se suele acompañar con plátano frito y ensalada de tomate y cebolla.",
    ingredientes: ["Arroz", "Charque", "Huevo", "Plátano", "Urucú"],
    pasos: [
      "Paso 1, Mezclar el Arroz y el Agua",
      "Paso 2, Mezclar el arroz cocido con el urucú",
      "Paso 3, freir un huevo y un platano",
      "Paso 4, preparar la carne al sarten",
      "Paso 5, mezclar el arroz tintado con el platano, la carne y el huevo",
    ],
  };

  const recetaMajaditoPollo = {
    nombre: "Majadito de Pollo",
    descripcion:
      "El majadito es un plato típico de Bolivia, especialmente de la región de Santa Cruz. Se trata de un plato de arroz con pollo y huevo frito. Se suele acompañar con plátano frito y ensalada de tomate y cebolla.",
    ingredientes: ["Arroz", "Pollo", "Huevo", "Plátano", "Urucú"],
    pasos: [
      "Paso 1, Mezclar el Arroz y el Agua",
      "Paso 2, Mezclar el arroz cocido con el urucú",
      "Paso 3, freir un huevo y un platano",
      "Paso 4, preparar el pollo a la sarten",
      "Paso 5, mezclar el arroz tintado con el platano, el pollo y el huevo",
    ],
  };

  const recetaMajaditoPato = {
    nombre: "Majadito de Pato",
    descripcion:
      "El majadito es un plato típico de Bolivia, especialmente de la región de Santa Cruz. Se trata de un plato de arroz con pato y huevo frito. Se suele acompañar con plátano frito y ensalada de tomate y cebolla.",
    ingredientes: ["Arroz", "Pato", "Huevo", "Plátano", "Urucú"],
    pasos: [
      "Paso 1, Mezclar el Arroz y el Agua",
      "Paso 2, Mezclar el arroz cocido con el urucú",
      "Paso 3, freir un huevo y un platano",
      "Paso 4, preparar el pato a la sarten",
      "Paso 5, mezclar el arroz tintado con el platano, la el pato y el huevo",
    ],
  };

  const recetaKeperi = {
    nombre: "Keperi",
    descripcion:
      "El keperi es un plato típico de Bolivia, especialmente de la región del oriente. Se trata de un plato con carne, arroz con queso, limón y en ocasiones se le agrega yuca.",
    ingredientes: ["Arroz con queso", "Carne", "Limon", "Yuca"],
    pasos: [
      "Paso 1, Mezclar el Arroz y la leche y el queso, luego pasarlo a la olla con agua",
      "Paso 2, Esperar a que se cocine el arroz con queso",
      "Paso 3, mezclar la carne con el limon",
      "Paso 4, Meter la carne al horno",
      "Paso 5, mezclar la carne mechada con el arroz con queso",
    ],
  };

  const recetaSopaMani = {
    nombre: "Sopa de Mani",
    descripcion:
      "La sopa de mani es una clasica, se trata de una sopa con mani, carne y arroz",
    ingredientes: ["Fideo", "Carne", "Mani", "Papas fritas"],
    pasos: [
      "Paso 1, Mezclar el fideo con el agua",
      "Paso 1.1, Licuar el fideo",
      "Paso 2, Mezclar el fideo con el mani",
      "Paso 4, Meter la carne a la olla con agua",
      "Paso 5, mezclar la carne con el resto de ingredientes",
    ],
  };

  const [recetasDesbloqueadas, setRecetasDesbloqueadas] = useState([
    recetaMajadito,
  ]);

  const [count, setCount] = useState(0);

  const idkbro = () => {
    alert("hola");
  };

  const [papel1selected, setPapel1selected] = useState(false);
  const [papel2selected, setPapel2selected] = useState(false);
  const [papel3selected, setPapel3selected] = useState(false);

  const comprarPapelTapiz = (numero) => {
    switch (numero) {
      case 1:
        if (puntuacion < 20) {
          alert("No tienes suficiente plata para comprar este papel tapiz!");
          return;
        }
        setPuntuacion(puntuacion - 20);
        setPapel1selected(true);
        setPapel2selected(false);
        setPapel3selected(false);
        break;
      case 3:
        if (puntuacion < 50) {
          alert("No tienes suficiente plata para comprar este papel tapiz!");
          return;
        }
        setPuntuacion(puntuacion - 100);
        setPapel3selected(true);
        setPapel1selected(false);
        setPapel2selected(false);
        break;
      case 2:
        if (puntuacion < 100) {
          alert("No tienes suficiente plata para comprar este papel tapiz!");
          return;
        }
        setPuntuacion(puntuacion - 50);
        setPapel2selected(true);
        setPapel1selected(false);
        setPapel3selected(false);
        break;
    }
  };

  const getPapelTapiz = () => {
    if (papel1selected) {
    } else if (papel2selected) {
    } else if (papel3selected) {
    }
  };

  const [cocinando, setCocinando] = useState(false);

  const [tutorial, setTutorial] = useState(true);

  var texto1 = "Hola, bienvenido a Platangos!";
  var texto2 =
    "Te enseñaré lo básico, pues en esta aventura aprenderemos los dos! Tú a preparar comidas típicas y yo a programar en JS!";
  var texto3 = "¡Empecemos!";

  const textosInicio = [texto1, texto2, texto3];

  var textoInicioDisplayed = 0;

  const majaditoPlato = {
    nombre: "Majadito de Charque",
    precio: 20,
    img: MajaditoCharque,
  };

  const keperiPlato = {
    nombre: "Keperi",
    precio: 25,
    img: Keperi,
  };

  const majaditoPolloPlato = {
    nombre: "Majadito de Pollo",
    precio: 25,
    img: MajaditoPollo,
  }

  const majaditoPatPlato = {
    nombre: "Majadito de Pato",
    precio: 30,
    img: MajaditoPollo,
  }

  const comprarMesa = () => {
    if (puntuacion >= 20) {
      alert("Has comprado una mesa!");
      setPuntuacion(puntuacion - 20);
      setMesas([...mesas, "mesa"]);
      setPuntosEstilo(puntosEstilo + 20);
    } else {
      alert("No tienes plata papito!");
    }
  };

  const comprarFlorero = () => {
    if (puntuacion >= 50) {
      alert("Has comprado un florero!");
      setPuntuacion(puntuacion - 50);
      setDecoraciones([...decoraciones, "florero"]);
      setPuntosEstilo(puntosEstilo + 30);
    } else {
      alert("No tienes plata papito!");
    }
  };

  const [majaditoPolloDesbloqueado, setMajaditoPolloDesbloqueado] =
    useState(false);
  const [majaditoPatoDesbloqueado, setMajaditoPatoDesbloqueado] =
    useState(false);
  const [keperiDesbloqueado, setKeperiDesbloqueado] = useState(false);
  const [sopaManiDesbloqueado, setSopaManiDesbloqueado] = useState(false);

  const comprarReceta = (receta) => {
    switch (receta) {
      case 1:
        if (puntuacion >= 100) {
          alert("Has comprado una receta!");
          setPuntuacion(puntuacion - 100);
          setRecetasDesbloqueadas([
            ...recetasDesbloqueadas,
            recetaMajaditoPollo,
          ]);
          setMajaditoPolloDesbloqueado(true);
          setPuntosEstilo(puntosEstilo + 50);
        } else {
          alert("No tienes plata papito!");
        }
        break;
      case 2:
        if (puntuacion >= 100) {
          alert("Has comprado una receta!");
          setPuntuacion(puntuacion - 100);
          setRecetasDesbloqueadas([
            ...recetasDesbloqueadas,
            recetaMajaditoPato,
          ]);
          setMajaditoPatoDesbloqueado(true);
          setPuntosEstilo(puntosEstilo + 50);
        } else {
          alert("No tienes plata papito!");
        }
        break;
      case 3:
        if (puntuacion >= 100) {
          alert("Has comprado una receta!");
          setPuntuacion(puntuacion - 100);
          setRecetasDesbloqueadas([...recetasDesbloqueadas, recetaKeperi]);
          setKeperiDesbloqueado(true);
          setPuntosEstilo(puntosEstilo + 50);
        } else {
          alert("No tienes plata papito!");
        }
        break;
      case 4:
        if (puntuacion >= 100) {
          alert("Has comprado una receta!");
          setPuntuacion(puntuacion - 100);
          setRecetasDesbloqueadas([...recetasDesbloqueadas, recetaSopaMani]);
          setSopaManiDesbloqueado(true);
          setPuntosEstilo(puntosEstilo + 50);
        } else {
          alert("No tienes plata papito!");
        }
        break;
    }
  };

  const prepararReceta = () => {
    if(polloCocinadoSelected && arrozTintadoSelected && platanoFritoSelected && huevoFritoSelected){
      alert("Felicidades, has preparado un majadito de pollo! Vamos a limpiar la mesa un poco!");
      //deselect all ingredients
      setPolloCocinadoSelected(false);
      setArrozTintadoSelected(false);
      setPlatanoFritoSelected(false);
      setHuevoFritoSelected(false);
      //delete all ingredients
      setListaIngredientesPreparados([]);

      setListaPlatosListos([...listaPlatosListos, majaditoPolloPlato]);
      setPuntuacion(puntuacion + 100);
      return;
    }

    if(patoCocinadoSelected && arrozTintadoSelected && platanoFritoSelected && huevoFritoSelected){
      alert("Felicidades, has preparado un majadito de pato! Vamos a limpiar la mesa un poco!");
      //deselect all ingredients
      setPatoCocinadoSelected(false);
      setArrozTintadoSelected(false);
      setPlatanoFritoSelected(false);
      setHuevoFritoSelected(false);
      //delete all ingredients
      setListaIngredientesPreparados([]);

      setListaPlatosListos([...listaPlatosListos, majaditoPatPlato]);
      setPuntuacion(puntuacion + 100);
      return;
    }

    if (
      charqueSelected &&
      huevoFritoSelected &&
      platanoFritoSelected &&
      arrozTintadoSelected
    ) {
      alert(
        "Felicidades, has preparado un majadito de charque! Vamos a limpiar la mesa un poco!"
      );
      //deselect all ingredients
      setCharqueSelected(false);
      setHuevoFritoSelected(false);
      setPlatanoFritoSelected(false);
      setArrozTintadoSelected(false);
      //delete all ingredients
      setListaIngredientesPreparados([]);

      setListaPlatosListos([...listaPlatosListos, majaditoPlato]);
      setPuntuacion(puntuacion + 100);
      return;
    }
    if (carneMechadaSelected && arrozConQuesoSelected) {
      alert(
        "Felicidades, has preparado un keperi! Vamos a limpiar la mesa un poco!"
      );
      //deselect all ingredients
      setCarneMechadaSelected(false);
      setArrozConQuesoSelected(false);
      //delete all ingredients
      setListaIngredientesPreparados([]);

      setListaPlatosListos([...listaPlatosListos, keperiPlato]);
      setPuntuacion(puntuacion + 100);
    }
  };

  const cleanAll = (receta) => {
    if (receta == "Majadito") {
      setArrozTintadoSelected(false);
      setCharqueSelected(false);
      setHuevoFritoSelected(false);
      setPlatanoFritoSelected(false);
      listaIngredientesPreparados.forEach((element) => {
        if (
          element.nombre == "Arroz Tintado" ||
          element.nombre == "Charque" ||
          element.nombre == "Huevo Frito" ||
          element.nombre == "Platano Frito"
        ) {
          deleteIngredient(element.id, element.nombre);
        }
      });
    }
  };

  const cambiarTexto = () => {
    var elemento = document.getElementById("displayedTextInicio");
    elemento.innerHTML = textosInicio[textoInicioDisplayed];
    textoInicioDisplayed++;
    if (textoInicioDisplayed > textosInicio.length) {
      elemento.style.display = "none";
      var textoSiguiente = document.getElementById("displayedText1");
      textoSiguiente.style.display = "block";
    }
  };

  const handleClickIngrediente = (nombre) => {
    if (!cocinando) {
      switch (nombre) {
        case "urucu":
          if (arrozCocidoSelected) {
            setTimeout(() => {
              setTotalElementos(totalElementos + 1);
              var ArrozTintado = {
                id: totalElementos,
                nombre: "Arroz Tintado",
                img: ArrozTintadoImg,
              };
              var existeArrozTintado = false;
              listaIngredientesPreparados.forEach((element) => {
                if (element.nombre == "Arroz Tintado") {
                  existeArrozTintado = true;
                }
              });
              if (existeArrozTintado) {
                return;
              }
              setListaIngredientesPreparados([
                ...listaIngredientesPreparados,
                ArrozTintado,
              ]);
              setCocinando(false);
              setArrozCocidoSelected(false);
            }, 2000);
            alert("Preparando arroz tintado, espera su coccion!");
            setCocinando(true);
          }
          break;
        case "agua":
          if (arrozSelected && lecheSelected && quesoSelected) {
            setTimeout(() => {
              setTotalElementos(totalElementos + 1);
              var ArrozConQueso = {
                id: totalElementos,
                nombre: "Arroz con queso",
                img: ArrozConQuesoImg,
              };
              var existeArrozConQueso = false;
              listaIngredientesPreparados.forEach((element) => {
                if (element.nombre == "Arroz con queso") {
                  existeArrozConQueso = true;
                }
              });
              if (existeArrozConQueso) {
                return;
              }
              setListaIngredientesPreparados([
                ...listaIngredientesPreparados,
                ArrozConQueso,
              ]);
              setCocinando(false);
              setArrozSelected(false);
              setLecheSelected(false);
              setquesoSelected(false);
              setCocinando(false);
            }, 10000);
            alert("Preparando arroz con queso, espera su coccion!");
          } else if (arrozSelected) {
            setTimeout(() => {
              setTotalElementos(totalElementos + 1);
              var ArrozCocinado = {
                id: totalElementos,
                nombre: "Arroz Cocinado",
                img: ArrozCocido,
              };
              var existeArroz = false;
              listaIngredientesPreparados.forEach((element) => {
                if (element.nombre == "Arroz Cocinado") {
                  existeArroz = true;
                }
              });
              if (existeArroz) {
                return;
              }
              setListaIngredientesPreparados([
                ...listaIngredientesPreparados,
                ArrozCocinado,
              ]);
              var element = document.getElementById("displayedText1");
              element.innerHTML =
                "Genial, habras visto que hemos cocinado arroz juntos! Ahora haz click en el arroz cocinado para eliminarlo de tu inventario.";
              setArrozSelected(false);
              setCocinando(false);
            }, 5000);
            alert("Preparando arroz cocido, espera su coccion!");
            setCocinando(true);
          }
          break;
        case "arroz":
          setArrozSelected(!arrozSelected);
          break;
        case "pollo":
          setPolloSelected(!polloSelected);
          break;
        case "carne":
          setCarneSelected(!carneSelected);
          break;
        case "limon":
          setLimonSelected(!limonSelected);
          break;
        case "platano":
          setPlatanoSelected(!platanoSelected);
          break;
        case "leche":
          setLecheSelected(!lecheSelected);
          break;
        case "queso":
          setquesoSelected(!quesoSelected);
          break;
        case "huevo":
          setHuevoSelected(!huevoSelected);
          break;
        case "Huevo Frito":
          setHuevoFritoSelected(!huevoSelected);
          break;
          case "Pato" :
            setPatoSelected(!patoSelected);
            break;
            case "mani":
              setManiSelected(!maniSelected);
              break;
      }
    } else {
      alert("Espera a que tus recetas termine de cocinarse!");
    }
  };

  const [piso1Comprado, setPiso1Comprado] = useState(false);
  const [piso2Comprado, setPiso2Comprado] = useState(false);
  const [piso3Comprado, setPiso3Comprado] = useState(false);

  const [piso1Selected, setPiso1Selected] = useState(false);
  const [piso2Selected, setPiso2Selected] = useState(false);
  const [piso3Selected, setPiso3Selected] = useState(false);
  const activarEstiloPiso = (piso) => {
    if (puntuacion < 50) {
      alert("No tienes suficiente plata para comprar este piso!");
      return;
    }
    switch (piso) {
      case 1:
        alert("Has seleccionado el piso 1!");
        if (!piso1Comprado) {
          setPiso1Comprado(true);
          setPuntosEstilo(puntosEstilo + 30);
        }
        setPiso1Selected(true);
        setPiso2Selected(false);
        setPiso3Selected(false);
        break;
      case 2:
        alert("Has seleccionado el piso 2!");
        if (!piso2Comprado) {
          setPiso2Comprado(true);
          setPuntosEstilo(puntosEstilo + 30);
        }
        setPiso1Selected(false);
        setPiso2Selected(true);
        setPiso3Selected(false);
        break;
      case 3:
        alert("Has seleccionado el piso 3!");
        if (!piso3Comprado) {
          setPiso3Comprado(true);
          setPuntosEstilo(puntosEstilo + 30);
        }
        setPiso1Selected(false);
        setPiso2Selected(false);
        setPiso3Selected(true);
        break;
    }
  };

  const [mesaVerdeActivada, setMesaVerdeActivada] = useState(false);
  const [mesaLilaActivada, setMesaLilaActivada] = useState(false);
  const [mesaAmarillaActivada, setMesaAmarillaActivada] = useState(false);

  const activarEstiloMesa = (mesa) => {
    switch (mesa) {
      case "mesa1":
        if (puntuacion < 20) {
          alert("No tienes suficiente plata para comprar esta mesa!");
          return;
        }
        setPuntuacion(puntuacion - 20);
        setPuntosEstilo(puntosEstilo + 30);
        setMesaVerdeActivada(true);
        alert(
          "Has seleccionado la mesa verde! Ahora parte de tus mesas seran de este color!"
        );
        break;
      case "mesa2":
        if (puntuacion < 50) {
          alert("No tienes suficiente plata para comprar esta mesa!");
          return;
        }
        setPuntuacion(puntuacion - 50);
        setMesaLilaActivada(true);
        setPuntosEstilo(puntosEstilo + 30);
        alert(
          "Has seleccionado la mesa lila! Ahora parte de tus mesas seran de este color!"
        );
        break;
      case "mesa3":
        if (puntuacion < 100) {
          alert("No tienes suficiente plata para comprar esta mesa!");
          return;
        }
        setPuntuacion(puntuacion - 100);
        setMesaAmarillaActivada(true);
        setPuntosEstilo(puntosEstilo + 30);
        alert(
          "Has seleccionado la mesa amarilla! Ahora parte de tus mesas seran de este color!"
        );
        break;
    }
  };

  const [totalElementos, setTotalElementos] = useState(0);
  const [arrozCocidoSelected, setArrozCocidoSelected] = useState(false);
  const [arrozTintadoSelected, setArrozTintadoSelected] = useState(false);
  const [arrozConQuesoSelected, setArrozConQuesoSelected] = useState(false);

  const [polloSelected, setPolloSelected] = useState(false);

  const [carneSelected, setCarneSelected] = useState(false);
  const [limonSelected, setLimonSelected] = useState(false);
  const [platanoSelected, setPlatanoSelected] = useState(false);
  const [lecheSelected, setLecheSelected] = useState(false);
  const [quesoSelected, setquesoSelected] = useState(false);
  const [huevoSelected, setHuevoSelected] = useState(false);
  const [huevoFritoSelected, setHuevoFritoSelected] = useState(false);
  const [maniSelected, setManiSelected] = useState(false);

  const [patoSelected, setPatoSelected] = useState(false);

  const [platanoFritoSelected, setPlatanoFritoSelected] = useState(false);
  const [carneMechadaSelected, setCarneMechadaSelected] = useState(false);
  const [polloCocinadoSelected, setPolloCocinadoSelected] = useState(false)
  const [patoCocinadoSelected, setPatoCocinadoSelected] = useState(false)
  const [charqueSelected, setCharqueSelected] = useState(false);

  var textoReceta1 =
    "Mucho ojo, pues te voy a mostrar los ingredientes necesarios para preparar un Majadito de Charque";
  var textoReceta11 =
    "Primero necesitaremos hacer el arroz, haz click en el Arroz y luego haz click en la olla con agua.";

  const textosReceta1 = [textoReceta1, textoReceta11];

  var textoReceta1Displayed = 0;

  const [arrozSelected, setArrozSelected] = useState(false);
  const [aguaSelected, setAguaSelected] = useState(false);

  const cambiarLeccion1 = () => {
    var elemento = document.getElementById("displayedText1");
    if (textoReceta1Displayed == 2) {
      if (!arrozSelected) {
        alert("Haz Click en el arroz!");
        return;
      }
    }
    elemento.innerHTML = textosReceta1[textoReceta1Displayed];
    textoReceta1Displayed++;
    if (textoReceta1Displayed > textosReceta1.length) {
      elemento.style.display = "none";
      var textoSiguiente = document.getElementById("displayedText2");
      textoSiguiente.style.display = "block";
    }
  };

  const deleteIngredient = (id, name) => {
    var elemento = listaIngredientesPreparados.find(
      (ingrediente) => ingrediente.name == name
    );
    switch (name) {
      case "Arroz Cocinado":
        setArrozSelected(false);
        break;
      case "Arroz Tintado":
        setArrozTintadoSelected(false);
        break;
      case "Carne Mechada":
        setCarneMechadaSelected(false);
        break;
      case "Huevo Frito":
        setHuevoFritoSelected(false);
        break;
      case "Charque":
        setCharqueSelected(false);
        break;
      default:
        break;
    }
    var newListaIngredientesPreparados = listaIngredientesPreparados.filter(
      (ingrediente) => ingrediente.id != id
    );

    if (tutorial) {
      var element = document.getElementById("displayedText1");
      element.innerHTML =
        "Genial, ahora sabes que mezclando ingredientes consigues otros nuevos! Prueba a hacer lo mismo con un arroz cocido y un urucú.";
    }
    setListaIngredientesPreparados(newListaIngredientesPreparados);
  };

  const seleccionarIngrediente = (nombre) => {
    if (nombre == "Arroz Cocinado") {
      setArrozCocidoSelected(!arrozCocidoSelected);
    }
    if (nombre == "Arroz Tintado") {
      setArrozTintadoSelected(!arrozTintadoSelected);
    }
    if (nombre == "Carne Mechada") {
      setCarneMechadaSelected(!carneMechadaSelected);
    }
    if (nombre == "Arroz") {
      setArrozSelected(!arrozSelected);
    }
    if (nombre == "Carne") {
      setCarneSelected(!carneSelected);
    }
    if (nombre == "Limon") {
      setLimonSelected(!limonSelected);
    }
    if (nombre == "Platano") {
      setPlatanoSelected(!platanoSelected);
    }
    if (nombre == "Leche") {
      setLecheSelected(!lecheSelected);
    }
    if (nombre == "Queso") {
      setquesoSelected(!quesoSelected);
    }
    if (nombre == "Platano Frito") {
      setPlatanoFritoSelected(!platanoFritoSelected);
    }
    if (nombre == "Charque") {
      setCharqueSelected(!charqueSelected);
    }
    if (nombre == "Huevo") {
      setHuevoSelected(!huevoSelected);
    }
    if (nombre == "Huevo Frito") {
      setHuevoFritoSelected(!huevoFritoSelected);
    }
    if (nombre == "Arroz con queso") {
      setArrozConQuesoSelected(!arrozConQuesoSelected);
    }

    if(nombre == "Pollo Cocinado"){
      setPolloCocinadoSelected(!polloCocinadoSelected);
    }
    if(nombre == "Pato Cocinado"){
      setPatoCocinadoSelected(!patoCocinadoSelected);
    }
  };

  const getBorderForSelected = (nombre) => {
    if (nombre == "Arroz Cocinado" && arrozCocidoSelected) {
      return { border: "2px solid yellow" };
    }
    if (nombre == "Arroz Tintado" && arrozTintadoSelected) {
      return { border: "2px solid yellow" };
    }
    if (nombre == "Carne Mechada" && carneMechadaSelected) {
      return { border: "2px solid yellow" };
    }
    if (nombre == "Pollo Cocinado" && polloCocinadoSelected) {
      return { border: "2px solid yellow" };
    }
    if (nombre == "Pato Cocinado" && patoCocinadoSelected) {
      return { border: "2px solid yellow" };
    }
    if (nombre == "Platano Frito" && platanoFritoSelected) {
      return { border: "2px solid yellow" };
    }
    if (nombre == "Charque" && charqueSelected) {
      return { border: "2px solid yellow" };
    }
    if (nombre == "Huevo Frito" && huevoFritoSelected) {
      return { border: "2px solid yellow" };
    }
    if (nombre == "Arroz con queso" && arrozConQuesoSelected) {
      return { border: "2px solid yellow" };
    }

    return { border: "none" };
  };

  const handleClickUtensilio = (nombre) => {
    if (!cocinando) {
      switch (nombre) {
        case "horno":
          if (patoSelected){
            setTimeout(() => {
              setTotalElementos(totalElementos + 1);
              var pollito = {
                id: totalElementos,
                nombre: "Pato Cocinado",
                img: polloCocinado,
              };
              var existePollo = false;
              listaIngredientesPreparados.forEach((element) => {
                if (element.nombre == "Pato Cocinado") {
                  existePollo = true;
                }
              });
              if (existePollo) {
                return;
              }
              setListaIngredientesPreparados([
                ...listaIngredientesPreparados,
                pollito,
              ]);
              setPolloSelected(false);


              setCocinando(false);
            }, 10000);
            alert("Preparando pato, espera su coccion!");
            setCocinando(true);
          }
          if (polloSelected){
            setTimeout(() => {
              setTotalElementos(totalElementos + 1);
              var pollito = {
                id: totalElementos,
                nombre: "Pollo Cocinado",
                img: polloCocinado,
              };
              var existePollo = false;
              listaIngredientesPreparados.forEach((element) => {
                if (element.nombre == "Pollo Cocinado") {
                  existePollo = true;
                }
              });
              if (existePollo) {
                return;
              }
              setListaIngredientesPreparados([
                ...listaIngredientesPreparados,
                pollito,
              ]);
              setPolloSelected(false);


              setCocinando(false);
            }, 10000);
            alert("Preparando pollo, espera su coccion!");
            setCocinando(true);
          }
          if (carneSelected && limonSelected) {
            setTimeout(() => {
              setTotalElementos(totalElementos + 1);
              var CarneMechada = {
                id: totalElementos,
                nombre: "Carne Mechada",
                img: Carne,
              };
              var existeCarneMechada = false;
              listaIngredientesPreparados.forEach((element) => {
                if (element.nombre == "Carne Mechada") {
                  existeCarneMechada = true;
                }
              });
              if (existeCarneMechada) {
                return;
              }
              setListaIngredientesPreparados([
                ...listaIngredientesPreparados,
                CarneMechada,
              ]);
              setCocinando(false);
            }, 10000);
            alert("Preparando carne mechada, espera su coccion!");
            setCocinando(true);
          }
          break;
        case "sarten":
          if (platanoSelected) {
            setTimeout(() => {
              setTotalElementos(totalElementos + 1);
              var PlatanoFrito = {
                id: totalElementos,
                nombre: "Platano Frito",
                img: Platano,
              };
              var existePlatanoFrito = false;
              listaIngredientesPreparados.forEach((element) => {
                if (element.nombre == "Platano Frito") {
                  existePlatanoFrito = true;
                }
              });
              if (existePlatanoFrito) {
                return;
              }
              setListaIngredientesPreparados([
                ...listaIngredientesPreparados,
                PlatanoFrito,
              ]);
              setPlatanoSelected(false);
              setCocinando(false);
            }, 3000);
            alert("Preparando platano frito, espera su coccion!");
            setCocinando(true);
          }
          if (carneSelected) {
            setTimeout(() => {
              setTotalElementos(totalElementos + 1);
              var CharqueObjeto = {
                id: totalElementos,
                nombre: "Charque",
                img: Charque,
              };
              var existeCharque = false;
              listaIngredientesPreparados.forEach((element) => {
                if (element.nombre == "Charque") {
                  existeCharque = true;
                }
              });
              if (existeCharque) {
                return;
              }
              setListaIngredientesPreparados([
                ...listaIngredientesPreparados,
                CharqueObjeto,
              ]);
              setCarneSelected(false);
              setCocinando(false);
            }, 4000);
            alert("Preparando charque, espera su coccion!");
            setCocinando(true);
          }
          if (huevoSelected) {
            setTimeout(() => {
              setTotalElementos(totalElementos + 1);
              var HuevoFrito = {
                id: totalElementos,
                nombre: "Huevo Frito",
                img: Huevo,
              };
              var existeHuevoFrito = false;
              listaIngredientesPreparados.forEach((element) => {
                if (element.nombre == "Huevo Frito") {
                  existeHuevoFrito = true;
                }
              });
              if (existeHuevoFrito) {
                return;
              }
              setListaIngredientesPreparados([
                ...listaIngredientesPreparados,
                HuevoFrito,
              ]);
              setHuevoSelected(false);
              setCocinando(false);
            }, 1500);
            alert("Preparando huevo frito, espera su coccion!");
            setCocinando(true);
          }
          break;
          case "licuadora":
            if (maniSelected) {
              setTimeout(() => {
                
                setCocinando(false);
              }, 1500);
              alert("Preparando mani!");
              setCocinando(true);
            }
            break;
      }
    }
  };

  const [listaIngredientesPreparados, setListaIngredientesPreparados] =
    useState([]);

  const [listaPlatosListos, setListaPlatosListos] = useState([]);
  return (
    <>
      <div class="allMightContainer">
        <section id="controles">
          <button
            onClick={() => {
              setVisibleRecetario(!VisibleRecetario);
            }}
          >
            Ver el recetario
          </button>
          <button
            onClick={() => {
              setVisibleTienda(!VisibleTienda);
            }}
          >
            Ver la tienda
          </button>
          <button
            onClick={() => {
              setVisibleLogros(!VisibleLogros);
            }}
          >
            Ver mis logros
          </button>
          <button
            onClick={() => {
              setVisibleInventario(!VisibleInventario);
            }}
          >
            Ver mi inventario
          </button>
          <button
            onClick={() => {
              setEnciclopedia(!enciclopedia);
            }}
          >
            Ver la enciclopedia de ingredientes
          </button>
          <button
            onClick={() => {
              setVisibleMiRestaurante(!visibleMiRestaurante);
            }}
          >
            Ver mi restaurante
          </button>
        </section>
        <div id="miElemento">
          <img src={Casera} alt="la casera" />
        </div>
        <div id="globosDeTexto">
          <div id="GloboDeTexto"></div>
          <p
            id="displayedTextInicio"
            onClick={() => {
              cambiarTexto();
            }}
          >
            Haz click para comenzar
          </p>
          <p
            id="displayedText1"
            onClick={() => {
              cambiarLeccion1();
            }}
          >
            Esta sera tu primer leccion. Conmigo aprenderás a cocinar algunos de
            los más deliciosos platos típicos de Santa Cruz.
          </p>
          <div id="inventarioDeIngredientes">
            <img
              src={Urucu}
              alt="urucu"
              id="urucu"
              onClick={() => {
                handleClickIngrediente("urucu");
              }}
            />

            <img
              src={Arroz}
              id="arroz"
              alt="arroz"
              style={
                arrozSelected
                  ? { border: "2px solid yellow" }
                  : { border: "none" }
              }
              onClick={() => {
                handleClickIngrediente("arroz");
              }}
            />
            <img
              src={Carne}
              alt="carne"
              id="carne"
              style={
                carneSelected
                  ? { border: "2px solid yellow" }
                  : { border: "none" }
              }
              onClick={() => {
                handleClickIngrediente("carne");
              }}
            />
            {majaditoPolloDesbloqueado && (
              <>
                <img
                  src={pollo}
                  alt="imagen de pollo"
                  id="pollo"
                  style={
                    polloSelected
                      ? { border: "2px solid yellow" }
                      : { border: "none" }
                  }
                  onClick={() => {
                    handleClickIngrediente("pollo");
                  }}
                />
              </>
            )}
            {majaditoPatoDesbloqueado && (
              <>
                <img src={Pato} alt="imagen de pato" id="pato" style={
                  patoSelected
                    ? { border: "2px solid yellow" }
                    : { border: "none" }
                }
                onClick={() => {
                  handleClickIngrediente("Pato");
                }
                } />
              </>
            )}  

            {keperiDesbloqueado && (
              <>
                <img
                  src={Limon}
                  alt="limon"
                  id="limon"
                  style={
                    limonSelected
                      ? { border: "2px solid yellow" }
                      : { border: "none" }
                  }
                  onClick={() => {
                    handleClickIngrediente("limon");
                  }}
                />
                <img
                  src={Leche}
                  alt="leche"
                  id="leche"
                  style={
                    lecheSelected
                      ? { border: "2px solid yellow" }
                      : { border: "none" }
                  }
                  onClick={() => {
                    handleClickIngrediente("leche");
                  }}
                />
                <img
                  src={Queso}
                  alt="queso"
                  id="queso"
                  style={
                    quesoSelected
                      ? { border: "2px solid yellow" }
                      : { border: "none" }
                  }
                  onClick={() => {
                    handleClickIngrediente("queso");
                  }}
                />
              </>
            )}

            {
              sopaManiDesbloqueado && <>
               <img
              src={Peanut}
              alt="mani"
              id="mani"
              style={
                maniSelected
                  ? { border: "2px solid yellow" }
                  : { border: "none" }
              }
              onClick={() => {
                handleClickIngrediente("mani");
              }}
            />
              </>
            }

            <img
              src={Platano}
              alt="platano"
              id="platano"
              style={
                platanoSelected
                  ? { border: "2px solid yellow" }
                  : { border: "none" }
              }
              onClick={() => {
                handleClickIngrediente("platano");
              }}
            />

            <img
              src={Huevo}
              alt="huevo"
              id="huevo"
              style={
                huevoSelected
                  ? { border: "2px solid yellow" }
                  : { border: "none" }
              }
              onClick={() => {
                handleClickIngrediente("huevo");
              }}
            />
          </div>
          <div id="utils">
            <img
              src={Agua}
              id="agua"
              alt="agua"
              onClick={() => {
                handleClickIngrediente("agua");
              }}
            />
            {
              sopaManiDesbloqueado && <>
               <img
              src={Licuadora}
              alt="licuadora"
              id="licuadora"
            
              onClick={() => {
                handleClickUtensilio("licuadora");
              }}
            />
              </>
            }
            <img
              src={Horno}
              alt="horno"
              id="horno"
              onClick={() => {
                handleClickUtensilio("horno");
              }}
            />
            <img
              src={Sarten}
              alt="sarten"
              id="sarten"
              onClick={() => {
                handleClickUtensilio("sarten");
              }}
            />
          </div>
          <div id="RecetasListas">
            {listaIngredientesPreparados &&
              listaIngredientesPreparados.map((ingrediente) => (
                <div className="idk">
                  <button
                    onClick={() => {
                      deleteIngredient(ingrediente.id, ingrediente.name);
                    }}
                  >
                    Eliminar
                  </button>
                  <img
                    src={ingrediente.img}
                    alt={ingrediente.nombre}
                    style={getBorderForSelected(ingrediente.nombre)}
                    onClick={() => {
                      seleccionarIngrediente(ingrediente.nombre);
                    }}
                  />
                  <p>{ingrediente.nombre}</p>
                </div>
              ))}
          </div>

          <div className="PreparRecetas">
            <button
              onClick={() => {
                prepararReceta();
              }}
            >
              Preparar receta!
            </button>
          </div>
          <div id="PlatosListos">
            {listaPlatosListos &&
              listaPlatosListos.map((plato) => (
                <div className="idk">
                  <button
                    onClick={() => {
                      alert(
                        "Has vendido un " +
                          plato.nombre +
                          " por " +
                          plato.precio +
                          "Bs."
                      );
                      setPuntuacion(puntuacion + plato.precio);
                      listaPlatosListos.splice(
                        listaPlatosListos.indexOf(plato),
                        1
                      );
                    }}
                  >
                    Vender
                  </button>
                  <img
                    src={plato.img}
                    alt={plato.nombre}
                    style={getBorderForSelected(plato.nombre)}
                    onClick={() => {
                      seleccionarIngrediente(plato.nombre);
                    }}
                  />
                  <p>
                    {plato.nombre}, {plato.precio}Bs.
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
      {VisibleRecetario && (
        <section id="recetarioMagico">
          <div>
            Recetario, aqui iran todas las recetas que vayas desbloqueando.
          </div>
          <button
            class="btnCerrar"
            onClick={() => {
              setVisibleRecetario(!VisibleRecetario);
            }}
          >
            Cerrar
          </button>
          {recetasDesbloqueadas &&
            recetasDesbloqueadas.map((receta) => (
              <div className="receta_div">
                <img src={fondoMadera} alt="fondo de madera para receta" />

                <div className="recetario_div_container">
                  <p>{receta.nombre}</p>
                  <p>{receta.descripcion}</p>
                  <ul>
                    {receta.ingredientes &&
                      receta.ingredientes.map((ingrediente) => (
                        <li>{ingrediente}</li>
                      ))}
                  </ul>
                  <ul>
                    {receta.pasos &&
                      receta.pasos.map((paso) => <li>{paso}</li>)}
                  </ul>
                </div>
              </div>
            ))}
        </section>
      )}
      <div id="puntuacion">
        <p>Dinero actual: {puntuacion}Bs.</p>
      </div>
      {VisibleTienda && (
        <section id="tienda">
          <button
            class="btnCerrar"
            onClick={() => {
              setVisibleTienda(!VisibleTienda);
            }}
          >
            Cerrar
          </button>
          <p>La tienda de tu restaurante, toma mango!</p>
          <p>Dinero actual: {puntuacion}Bs.</p>
          <div className="TiendaVirtual">
            <div className="papelTapiz">
              {!papel1selected && (
                <div>
                  <img
                    className="mesaflorero"
                    src={redpattern}
                    alt="Imagen de papel tapiz"
                  />
                  <button
                    onClick={() => {
                      comprarPapelTapiz(1);
                    }}
                  >
                    Comprar Papel tapiz Rojo
                  </button>
                </div>
              )}
              {!papel2selected && (
                <div>
                  <img
                    className="mesaflorero"
                    src={mangopattern}
                    alt="Imagen de papel tapiz"
                  />
                  <button
                    onClick={() => {
                      comprarPapelTapiz(2);
                    }}
                  >
                    Comprar Papel tapiz Mango
                  </button>
                </div>
              )}
              {!papel3selected && (
                <div>
                  <img
                    className="mesaflorero"
                    src={greenpattern}
                    alt="Imagen de papel tapiz"
                  />
                  <button
                    onClick={() => {
                      comprarPapelTapiz(3);
                    }}
                  >
                    Comprar Papel tapiz Verde
                  </button>
                </div>
              )}
            </div>
            <div className="estilosMesas">
              {!mesaVerdeActivada && (
                <div>
                  <img className="mesaflorero" src={mesa1} alt="mesa1" />
                  <button
                    onClick={() => {
                      activarEstiloMesa("mesa1");
                    }}
                  >
                    Comprar estilo (-20bs)
                  </button>
                </div>
              )}
              {!mesaLilaActivada && (
                <div>
                  <img className="mesaflorero" src={mesa2} alt="mesa2" />
                  <button
                    onClick={() => {
                      activarEstiloMesa("mesa2");
                    }}
                  >
                    Comprar estilo (-50bs)
                  </button>
                </div>
              )}
              {!mesaAmarillaActivada && (
                <div>
                  <img className="mesaflorero" src={mesa3} alt="mesa3" />
                  <button
                    onClick={() => {
                      activarEstiloMesa("mesa3");
                    }}
                  >
                    Comprar estilo (-100bs)
                  </button>
                </div>
              )}
            </div>
            <div className="estiloPiso">
              {!piso1Selected && (
                <>
                  <div>
                    <img className="mesaflorero" src={piso1} alt="piso1" />
                    <button
                      onClick={() => {
                        activarEstiloPiso(1);
                      }}
                    >
                      Colocar piso (-50Bs.)
                    </button>
                  </div>
                </>
              )}
              {!piso2Selected && (
                <div>
                  <img className="mesaflorero" src={piso2} alt="piso2" />
                  <button
                    onClick={() => {
                      activarEstiloPiso(2);
                    }}
                  >
                    Colocar piso (-50Bs.)
                  </button>
                </div>
              )}
              {!piso3Selected && (
                <div>
                  <img className="mesaflorero" src={piso3} alt="piso3" />
                  <button
                    onClick={() => {
                      activarEstiloPiso(3);
                    }}
                  >
                    Colocar piso (-50Bs.)
                  </button>
                </div>
              )}
            </div>
            <div className="mesasYDeco">
              {mesas.length < 10 && (
                <div>
                  <img
                    className="mesaflorero"
                    src={mesa}
                    alt="imagen de Mesa"
                  />
                  <button
                    onClick={() => {
                      comprarMesa();
                    }}
                  >
                    Comprar (-20Bs.)
                  </button>
                </div>
              )}
              {decoraciones.length < 10 && (
                <div>
                  <img
                    className="mesaflorero"
                    src={florero}
                    alt="imagen de Florero"
                  />
                  <button
                    onClick={() => {
                      comprarFlorero();
                    }}
                  >
                    Comprar (-50Bs.)
                  </button>
                </div>
              )}
            </div>
            <div className="recetas_por_desbloquear">
              {!majaditoPolloDesbloqueado && (
                <div>
                  <img src="" alt="imagen de Receta" />
                  <button
                    onClick={() => {
                      comprarReceta(1);
                    }}
                  >
                    Comprar receta: Majadito de Pollo
                  </button>
                </div>
              )}

              {!majaditoPatoDesbloqueado && (
                <div>
                  <img src="" alt="imagen de Receta" />
                  <button
                    onClick={() => {
                      comprarReceta(2);
                    }}
                  >
                    Comprar receta: Majadito de Pato
                  </button>
                </div>
              )}
              {!keperiDesbloqueado && (
                <div>
                  <img src={Keperi} alt="imagen de Receta" />
                  <button
                    onClick={() => {
                      comprarReceta(3);
                    }}
                  >
                    Comprar receta: Keperi
                  </button>
                </div>
              )}
              {!sopaManiDesbloqueado && (
                <div>
                  <img src="" alt="imagen de Receta" />
                  <button
                    onClick={() => {
                      comprarReceta(4);
                    }}
                  >
                    Comprar receta: Sopa de mani
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
      {VisibleLogros && (
        <section id="misLogros">
          <button
            class="btnCerrar"
            onClick={() => {
              setVisibleLogros(!VisibleLogros);
            }}
          >
            Cerrar
          </button>
          <p>Aqui se guardaran tus logros</p>
          {puntosEstilo > 0 && (
            <>
              <h3>Nuestros humildes comienzos</h3>
              <p>Haz que tu restaurante tenga 1 estrella</p>
            </>
          )}
          {puntosEstilo > 200 && (
            <>
              <h3>Dándonos a conocer</h3>
              <p>Tu restaurante llego a las 2 estrellas!</p>
            </>
          )}
          {puntosEstilo > 400 && (
            <>
              <h3>Haciéndose un título</h3>
              <p>Tu restaurante ahora tiene 3 estrellas! Que emocion</p>
            </>
          )}
          {puntosEstilo > 600 && (
            <>
              <h3>Restaurante de lujo</h3>
              <p>Tu restaurante se encuentra entre uno de los mejores</p>
            </>
          )}
          {puntosEstilo > 1000 && (
            <>
              <h3>Qué platango!</h3>
              <p>Eres lo mejor de lo mejor!</p>
            </>
          )}
          {decoraciones.length > 0 && (
            <>
              <h3>Decorador</h3>
              <p>Has comprado tu primera decoracion</p>
            </>
          )}
          {mesas.length > 0 && (
            <>
              <h3>Comodidad</h3>
              <p>Has comprado tu primera mesa</p>
            </>
          )}
          {recetasDesbloqueadas.length > 1 && (
            <>
              <h3>Recetario amplio</h3>
              <p>Has comprado tu primera receta</p>
            </>
          )}
          {recetasDesbloqueadas.length >= 4 && (
            <>
              <h3>Maestro de las recetas</h3>
              <p>Tienes toda la variedad de recetas a la mano!</p>
            </>
          )}
        </section>
      )}

      {VisibleInventario && (
        <div id="Inventario">
          <button
            class="btnCerrar"
            onClick={() => {
              setVisibleInventario(!VisibleInventario);
            }}
          >
            Cerrar
          </button>
          <p>Este es tu inventario actual:</p>
          <ul>
            <li>
              Mesas:{" "}
              {mesas.length > 0
                ? mesas.map((mesas) => (
                    <img
                      src={mesa}
                      alt="mesa"
                      style={{ width: "50px", height: "50px" }}
                    />
                  ))
                : "No tienes mesas"}
            </li>
            <li>
              Decoraciones:{" "}
              {decoraciones.length > 0
                ? decoraciones.map((decoraciones) => (
                    <img
                      src={florero}
                      alt="florero"
                      style={{ width: "50px", height: "50px" }}
                    />
                  ))
                : "No tienes decoraciones"}
            </li>
            <li>Recetas: {recetasDesbloqueadas.length}</li>
          </ul>
          <p>
            Tu puntuacion actual es: {puntosEstilo}
            {puntosEstilo > 0 && puntosEstilo < 199 && (
              <img className="estrella" src={estrella} alt="estrella resto" />
            )}
            {puntosEstilo > 200 && puntosEstilo < 399 && (
              <>
                <img className="estrella" src={estrella} alt="estrella resto" />
                <img className="estrella" src={estrella} alt="estrella resto" />
              </>
            )}
            {puntosEstilo > 400 && puntosEstilo < 599 && (
              <>
                <img className="estrella" src={estrella} alt="estrella resto" />
                <img className="estrella" src={estrella} alt="estrella resto" />
                <img className="estrella" src={estrella} alt="estrella resto" />
              </>
            )}
            {puntosEstilo > 600 && puntosEstilo < 799 && (
              <>
                <img className="estrella" src={estrella} alt="estrella resto" />
                <img className="estrella" src={estrella} alt="estrella resto" />
                <img className="estrella" src={estrella} alt="estrella resto" />
                <img className="estrella" src={estrella} alt="estrella resto" />
              </>
            )}
            {puntosEstilo > 1000 && (
              <>
                <img className="estrella" src={estrella} alt="estrella resto" />
                <img className="estrella" src={estrella} alt="estrella resto" />
                <img className="estrella" src={estrella} alt="estrella resto" />
                <img className="estrella" src={estrella} alt="estrella resto" />
                <img className="estrella" src={estrella} alt="estrella resto" />
              </>
            )}
          </p>
        </div>
      )}
      {/**
        <div class="currentElements">
        <p>Elementos seleccionados:</p>
        {arrozSelected && <p>Arroz</p>}
        {arrozCocidoSelected && <p>Arroz Cocido</p>}
        {arrozTintadoSelected && <p>Arroz Tintado</p>}
        {carneSelected && <p>Carne</p>}
        {carneMechadaSelected && <p>Carne Mechada</p>}
        {limonSelected && <p>Limon</p>}
        {platanoSelected && <p>Platano</p>}
        {lecheSelected && <p>Leche</p>}
        {quesoSelected && <p>Queso</p>}
        {arrozConQuesoSelected && <p>Arroz con queso</p>}
        {platanoFritoSelected && <p>Platano Frito</p>}
        {charqueSelected && <p>Charque</p>}
        {huevoSelected && <p>Huevo</p>}
        {huevoFritoSelected && <p>Huevo Frito</p>}
      </div>
         */}
      {enciclopedia && (
        <>
          <section id="enciclopedia">
            <div id="urucuinfo">
              <h3>Bixa orellana (Urucu)</h3>

              <p>
                <strong>Características de la Planta:</strong>
              </p>
              <ul>
                <li>
                  Bixa orellana es un árbol tropical que puede alcanzar hasta 10
                  metros de altura.
                </li>
                <li>Es conocido por sus hojas alargadas y flores rosadas.</li>
                <li>
                  Las semillas de la planta contienen el pigmento
                  rojo-anaranjado llamado annatto.
                </li>
              </ul>

              <p>
                <strong>Usos Tradicionales:</strong>
              </p>
              <ul>
                <li>
                  <strong>Colorante Alimentario:</strong> El annatto extraído de
                  las semillas de urucu se utiliza comúnmente como colorante
                  natural en alimentos. Proporciona un tono amarillo a naranja y
                  se usa en la fabricación de quesos, margarinas, arroces,
                  salsas y otros productos alimenticios.
                </li>
                <li>
                  <strong>Usos Cosméticos:</strong> El annatto también se
                  utiliza en la industria cosmética, particularmente en la
                  fabricación de productos para el cuidado del cabello y la
                  piel.
                </li>
                <li>
                  <strong>Medicina Tradicional:</strong> En algunas culturas
                  indígenas de América del Sur, diversas partes de la planta,
                  incluyendo las semillas, se han utilizado en la medicina
                  tradicional para tratar diversas afecciones. Sin embargo, es
                  importante destacar que la efectividad y seguridad de estos
                  usos deben evaluarse desde una perspectiva científica.
                </li>
              </ul>

              <p>
                <strong>Cultivo:</strong>
              </p>
              <p>
                La planta de urucu se cultiva en varias regiones tropicales del
                mundo, especialmente en América Latina y África.
              </p>

              <p>
                Es importante tener en cuenta que, aunque el annatto es un
                colorante natural y tiene usos tradicionales, algunas personas
                pueden ser alérgicas a él. Además, en la actualidad, la
                industria alimentaria utiliza el annatto como alternativa a los
                colorantes artificiales en productos procesados.
              </p>
            </div>
            <div>
              <h3>Limon cambita.</h3>
              <h3>Definición:</h3>
              <p>
                El término "limón" se refiere comúnmente a una fruta cítrica de
                sabor ácido y refrescante que pertenece al género Citrus.
              </p>

              <h3>Características del Limón:</h3>
              <ul>
                <li>
                  El limón es conocido por su piel amarilla y pulpa jugosa.
                </li>
                <li>
                  Contiene ácido cítrico, lo que le confiere su sabor
                  característico.
                </li>
                <li>
                  Se utiliza tanto en la cocina como en la fabricación de
                  productos de limpieza debido a su aroma fresco.
                </li>
              </ul>

              <h3>Usos Comunes:</h3>
              <ul>
                <li>
                  <strong>Culinarios:</strong> El limón se utiliza para dar
                  sabor a una variedad de platos, desde bebidas hasta postres y
                  platos salados.
                </li>
                <li>
                  <strong>Medicinales:</strong> Se le atribuyen propiedades
                  saludables y se utiliza en remedios caseros para aliviar
                  síntomas como la garganta irritada.
                </li>
                <li>
                  <strong>Cosméticos:</strong> El aceite esencial de limón se
                  utiliza en la industria cosmética y en productos para el
                  cuidado de la piel.
                </li>
              </ul>

              <p>
                El limón es una fruta versátil con numerosos usos en la cocina,
                la medicina y la industria cosmética.
              </p>
            </div>
            <div>
              <h3>Charque.</h3>
              <h3>Definición:</h3>
              <p>
                El término "charque" puede referirse a diferentes cosas según el
                contexto.
              </p>

              <h3>1. Charque como Plato:</h3>
              <p>
                En algunas regiones, "charque" se refiere a un plato tradicional
                que consiste en carne, generalmente de res, que ha sido
                deshidratada y luego se cocina para su consumo. Es común en la
                gastronomía de ciertas zonas, como en algunas partes de América
                Latina.
              </p>

              <h3>2. Charque como Proceso de Secado:</h3>
              <p>
                En otro contexto, "charque" puede ser el término utilizado para
                describir el proceso de secado de carne para su conservación.
                Este método ha sido históricamente utilizado en diversas
                culturas como una forma de preservar carne durante períodos
                prolongados.
              </p>

              <h3>3. Otros Usos:</h3>
              <p>
                Dependiendo del contexto geográfico y cultural, el término
                "charque" puede tener otros significados. Puede referirse a
                prácticas específicas de preparación de alimentos, costumbres
                locales o incluso tener usos en la medicina tradicional.
              </p>

              <p>
                Es importante tener en cuenta que el significado de "charque"
                puede variar y se recomienda considerar el contexto específico
                para una comprensión precisa.
              </p>
            </div>
            <div>
              <h3>Leche</h3>
              <h3>Leche en Bolivia:</h3>

              <p>
                La leche en Bolivia es un componente fundamental de la dieta y
                la industria alimentaria del país.
              </p>

              <h3>Producción y Características:</h3>
              <ul>
                <li>
                  Bolivia cuenta con diversas regiones productoras de leche,
                  contribuyendo a la producción nacional.
                </li>
                <li>
                  La leche boliviana proviene principalmente de ganado bovino, y
                  también se obtiene de otros animales como cabras y ovejas en
                  menor medida.
                </li>
                <li>
                  Se producen diferentes tipos de leche, como leche entera,
                  descremada y enriquecida con nutrientes.
                </li>
              </ul>

              <h3>Consumo y Usos:</h3>
              <ul>
                <li>
                  La leche boliviana se consume tanto de forma líquida como en
                  la preparación de diversos productos lácteos.
                </li>
                <li>
                  Es un ingrediente común en la cocina boliviana, utilizado en
                  platos tradicionales y modernos.
                </li>
                <li>
                  La leche desempeña un papel importante en la nutrición de la
                  población, proporcionando calcio y otros nutrientes
                  esenciales.
                </li>
              </ul>

              <h3>Industria Lechera:</h3>
              <p>
                La industria lechera en Bolivia ha experimentado cambios y
                mejoras en la calidad de producción, contribuyendo al desarrollo
                económico y al bienestar de las comunidades rurales.
              </p>
            </div>
            <div>
              <h3>Bananas-platanos.</h3>
              <h3>La Banana en Bolivia:</h3>

              <p>
                La banana es una fruta tropical cultivada en diversas regiones
                de Bolivia, contribuyendo significativamente a la economía y la
                dieta del país.
              </p>

              <h3>Cultivo y Variedades:</h3>
              <ul>
                <li>
                  Bolivia tiene condiciones climáticas propicias para el cultivo
                  de bananas en varias regiones, como los valles tropicales y
                  subtropicales.
                </li>
                <li>
                  Se cultivan diferentes variedades de bananas, incluyendo la
                  variedad Cavendish, que es común en muchas partes del mundo.
                </li>
                <li>
                  El cultivo de bananas es llevado a cabo por agricultores
                  locales, y la fruta es una importante fuente de ingresos para
                  muchas comunidades.
                </li>
              </ul>

              <h3>Consumo y Exportación:</h3>
              <ul>
                <li>
                  La banana es una fruta popular en la dieta diaria de los
                  bolivianos, consumida tanto fresca como en diversas
                  preparaciones culinarias.
                </li>
                <li>
                  Bolivia también exporta bananas, contribuyendo al comercio
                  internacional y generando divisas para el país.
                </li>
              </ul>

              <h3>Importancia Económica y Social:</h3>
              <p>
                El cultivo y la comercialización de bananas no solo tienen un
                impacto económico significativo, sino que también desempeñan un
                papel crucial en el sustento de comunidades agrícolas en
                Bolivia.
              </p>

              <p>
                Es fundamental reconocer la importancia de la banana en la
                agricultura y la alimentación boliviana, así como su impacto en
                la economía local.
              </p>
            </div>
            <div>
              <h3>Huevo.</h3>
              <h3>El Huevo en Bolivia:</h3>

              <p>
                El huevo es un alimento básico y versátil en la dieta boliviana,
                proporcionando una fuente importante de proteínas y otros
                nutrientes esenciales.
              </p>

              <h3>Producción y Abastecimiento:</h3>
              <ul>
                <li>
                  Bolivia tiene una producción significativa de huevos, con
                  granjas avícolas que contribuyen al abastecimiento local.
                </li>
                <li>
                  La producción de huevos es llevada a cabo tanto a nivel
                  industrial como en granjas familiares, asegurando un
                  suministro diversificado.
                </li>
              </ul>

              <h3>Consumo y Usos:</h3>
              <ul>
                <li>
                  El huevo se consume de diversas formas en Bolivia, ya sea
                  cocido, frito, en tortillas, o como ingrediente en platos
                  tradicionales y modernos.
                </li>
                <li>
                  Es una fuente accesible y económica de proteínas, lo que lo
                  convierte en un componente esencial de muchas dietas.
                </li>
              </ul>

              <h3>Valor Nutricional:</h3>
              <p>
                Los huevos son conocidos por su alto valor nutricional,
                proporcionando proteínas de alta calidad, vitaminas, minerales y
                grasas saludables.
              </p>

              <p>
                Es importante destacar el papel fundamental del huevo en la
                dieta boliviana, tanto en términos de nutrición como de
                accesibilidad.
              </p>
            </div>
            <div>
              <h3>El Majadito:</h3>

              <p>
                El majadito es un plato típico de la región de Santa Cruz en
                Bolivia, conocido por su delicioso sabor y su arraigo en la
                tradición culinaria local.
              </p>

              <h3>Ingredientes Principales:</h3>
              <ul>
                <li>Arroz</li>
                <li>Charque (carne de res deshidratada y salada)</li>
                <li>Plátano maduro</li>
                <li>Huevos</li>
                <li>Cebolla</li>
                <li>Ajo</li>
                <li>Tomate</li>
                <li>Comino y otras especias al gusto</li>
              </ul>

              <h3>Preparación:</h3>
              <ol>
                <li>Cocinar el arroz de forma tradicional.</li>
                <li>
                  En una sartén, freír el charque desmenuzado hasta que esté
                  dorado y crujiente.
                </li>
                <li>
                  Agregar cebolla, ajo, tomate y otras especias al gusto para
                  hacer un sofrito.
                </li>
                <li>
                  Añadir plátano maduro cortado en trozos y cocinar hasta que
                  esté tierno.
                </li>
                <li>
                  Mezclar el arroz cocido con el sofrito y el charque,
                  asegurándose de que todos los ingredientes se integren bien.
                </li>
                <li>
                  En otra sartén, freír huevos y servir sobre el majadito.
                </li>
              </ol>

              <h3>Servir y Disfrutar:</h3>
              <p>
                El majadito se sirve caliente y se disfruta comúnmente como
                plato principal, destacando la combinación única de sabores y
                texturas.
              </p>

              <p>
                Este platillo representa la riqueza gastronómica de Santa Cruz y
                refleja la influencia de ingredientes locales en la cocina
                boliviana.
              </p>
            </div>
          </section>
        </>
      )}
      {visibleMiRestaurante && (
        <section id="miRestaurante">
          <button
            class="btnCerrar"
            onClick={() => {
              setVisibleMiRestaurante(!visibleMiRestaurante);
            }}
          >
            Cerrar
          </button>
          <p>Esto es todo lo que somos:</p>
          <div id="papeltapiz">
            {papel1selected || papel2selected || papel3selected ? (
              <p>Papel tapiz seleccionado:</p>
            ) : (
              ""
            )}
            {papel1selected && (
              <img src={redpattern} className="papeltapiz" alt="papel tapiz" />
            )}
            {papel2selected && (
              <img
                src={mangopattern}
                className="papeltapiz"
                alt="papel tapiz"
              />
            )}
            {papel3selected && (
              <img
                src={greenpattern}
                className="papeltapiz"
                alt="papel tapiz"
              />
            )}
          </div>
          {mesaAmarillaActivada || mesaLilaActivada || mesaVerdeActivada ? (
            <p>Estilo de mesas comprados:</p>
          ) : (
            ""
          )}
          {mesaAmarillaActivada && (
            <img src={mesa3} className="mesaflorero" alt="mesa" />
          )}
          {mesaLilaActivada && (
            <img src={mesa2} className="mesaflorero" alt="mesa" />
          )}
          {mesaVerdeActivada && (
            <img src={mesa1} className="mesaflorero" alt="mesa" />
          )}
          {piso1Selected || piso2Selected || piso3Selected ? (
            <p>Estilo de piso seleccionado:</p>
          ) : (
            ""
          )}
          {piso1Selected && (
            <img src={piso1} className="mesaflorero" alt="piso" />
          )}
          {piso2Selected && (
            <img src={piso2} className="mesaflorero" alt="piso" />
          )}
          {piso3Selected && (
            <img src={piso3} className="mesaflorero" alt="piso" />
          )}
        </section>
      )}

      {cocinando && (
        <div id="cocinando">
          <img src={Clock} alt="reloj cronometro" />
        </div>
      )}
    </>
  );
}

export default App;
