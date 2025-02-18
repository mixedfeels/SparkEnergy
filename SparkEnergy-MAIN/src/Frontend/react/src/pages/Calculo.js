import React from "react";
import Header from "../components/containers/Header";
import "mathjax-full/es5/tex-mml-chtml.js"; // Importando o MathJax

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useRef, useState } from "react";
import {
  Camp,
  Button,
  CalculoDesc,
  CalculoInfo,
  CalculoInfo2,
  EnergiaEolica,
  EnergiaEolicaList,
  EnergiaEolicaComp,
  CalculoContainer,
  CalculoEnergy,
} from "../styles/CalculoStyle";

function Calc() {
  const CampPmaxARef = useRef(null);
  const CampVcRef = useRef(null);
  const CampVPmaxRef = useRef(null);
  const CampKRef = useRef(null);
  const CampPmaxRef = useRef(null);
  const AvaliarRef = useRef(null);

  const expressionRefInitial = useRef(null);
  const expressionRefIntegra = useRef(null);
  const expressionRefSimplif = useRef(null);
  const expressionRefFinal = useRef(null);

  const expressionTaylor = useRef(null);
  const expressionRefSolar = useRef(null);

  const [pmaxA, setPmaxA] = useState(50);
  const [vc, setVc] = useState(4);
  const [vpmax, setVpmax] = useState(12);
  const [k, setK] = useState(0.92);
  const [pmax, setPmax] = useState(50);

  const [solarData, setSolarData] = useState([]);
  const [windData, setWindData] = useState([]);
  const [maxSolar, setMaxSolar] = useState(0);
  const [minSolar, setMinSolar] = useState(0);
  const [maxWind, setMaxWind] = useState(0);
  const [minWind, setMinWind] = useState(0);
  const [solarGera, setSolarGera] = useState(0);

  function handleClick() {
    const CampPmaxA = CampPmaxARef.current;
    const CampVc = CampVcRef.current;
    const CampVPmax = CampVPmaxRef.current;
    const CampK = CampKRef.current;
    const CampPmax = CampPmaxRef.current;

    //---------------------------------------DEMONSTRAÇÃO DO CÁLCULO SOLAR------------------------------------------
    //---------------------------------------TEOREMA DE TAYLOR---------------------------------
    const expressionR = `
         ${CampPmax.value} \\cdot \\sin\\left(\\frac{\\pi t}{24}\\right) +
         \\left( ${CampPmax.value} \\cdot \\cos\\left(\\frac{\\pi \\cdot 0}{24}\\right) \\cdot (t - 0) \\cdot \\left(\\frac{\\pi}{24}\\right)\\right) -
         \\frac{ ${CampPmax.value} \\cdot \\sin\\left(\\frac{\\pi \\cdot 0}{24}\\right) \\cdot (t - 0) \\cdot \\left(\\frac{\\pi}{24}\\right)^2 }{2} -AvaliarRef
         \\frac{ ${CampPmax.value} \\cdot \\cos\\left(\\frac{\\pi \\cdot 0}{24}\\right) \\cdot (t - 0) \\cdot \\left(\\frac{\\pi}{24}\\right)^3 }{6}
            `;
    if (expressionTaylor.current) {
      // Adiciona a expressão ao conteúdo do ref
      expressionTaylor.current.innerHTML = `\\(${expressionR}\\)`;

      // Renderiza com MathJax
      window.MathJax.typeset([expressionTaylor.current]);
    }
    //---------------------------------------
    //---------------------------------------CÁLCULO DE GERAÇÃO DE ENERGIA----------------------------------
    //---------------------------------------EXPRESSÃO INICIAL---------------------------------
    const expressionInitial = `\\int_{0}^{24}  ${CampPmax.value} \\cdot \\sin (\\frac{\\pi}{24})`;
    if (expressionRefInitial.current) {
      // Adiciona a expressão ao conteúdo do ref
      expressionRefInitial.current.innerHTML = `\\(${expressionInitial}\\)`;

      // Renderiza com MathJax
      window.MathJax.typeset([expressionRefInitial.current]);
    }
    //---------------------------------------EXPRESSÃO INTERGRADA---------------------------------
    const expressionIntegra = `- ${CampPmax.value} \\cdot \\cos (\\frac{\\pi \\cdot t}{24}) \\cdot \\frac{24}{\\pi} du`;
    if (expressionRefIntegra.current) {
      // Adiciona a expressão ao conteúdo do ref
      expressionRefIntegra.current.innerHTML = `\\(${expressionIntegra}\\)`;

      // Renderiza com MathJax
      window.MathJax.typeset([expressionRefIntegra.current]);
    }
    //---------------------------------------EXPRESSÃO SIMPLIFICADA---------------------------------
    const expressionSimplif = `- \\frac{${
      CampPmax.value * 24
    } \\cdot \\cos (\\frac{\\pi \\cdot t}{24})}{\\pi}`;
    if (expressionRefSimplif.current) {
      // Adiciona a expressão ao conteúdo do ref
      expressionRefSimplif.current.innerHTML = `\\(${expressionSimplif}\\)`;

      // Renderiza com MathJax
      window.MathJax.typeset([expressionRefSimplif.current]);
    }
    //---------------------------------------EXPRESSÃO FINAL---------------------------------
    const expressionFinal = `\\frac{${
      CampPmax.value * 24
    }}{\\pi} - ( - \\frac{${maxSolar * 24}}{\\pi})`;
    if (expressionRefFinal.current) {
      // Adiciona a expressão ao conteúdo do ref
      expressionRefFinal.current.innerHTML = `\\(${expressionFinal}\\)`;

      // Renderiza com MathJax
      window.MathJax.typeset([expressionRefFinal.current]);
    }
    //---------------------------------------Expressão do Gráfico----------------------------
    const expressionSolar = `P(t) = Pmax \\cdot \\sin (\\frac{\\pi}{24})`;
    if (expressionRefSolar.current) {
      // Adiciona a expressão ao conteúdo do ref
      expressionRefSolar.current.innerHTML = `\\(${expressionSolar}\\)`;

      // Renderiza com MathJax
      window.MathJax.typeset([expressionRefSolar.current]);
    }

    const solarGerar = () => (CampPmax.value * 24 * 2) / Math.PI;

    const solarPotência = (t) => CampPmax.value * Math.sin((Math.PI * t) / 24);

    const windPotência = (v) => {
      if (v < CampVc.value) return 0; // Abaixo da velocidade mínima
      if (v < CampVPmax.value)
        return (
          (CampK.value * (v - CampVc.value) * CampPmaxA.value) /
          (CampVPmax.value - CampVc.value)
        ); // Cálculo simplificado para potência
      return CampPmaxA.value * CampK.value; // Potência máxima
    };

    const calculateSolarData = () => {
      const data = [];
      for (let t = 0; t <= 24; t++) {
        const Potência = solarPotência(t);
        data.push({ time: t, Potência });
      }
      return data;
    };

    const calculateWindData = () => {
      const data = [];
      for (let v = 0; v <= 20; v++) {
        const Potência = windPotência(v);
        data.push({ windSpeed: v, Potência });
      }
      return data;
    };

    const newSolarData = calculateSolarData();
    const newWindData = calculateWindData();

    setSolarGera(solarGerar);
    setSolarData(newSolarData);
    setWindData(newWindData);
    setMaxSolar(Math.max(...newSolarData.map((d) => d.Potência)));
    setMinSolar(Math.min(...newSolarData.map((d) => d.Potência)));
    setMaxWind(Math.max(...newWindData.map((d) => d.Potência)));
    setMinWind(Math.min(...newWindData.map((d) => d.Potência)));
  }

  return (
    <>
      <Header />
      <CalculoContainer>
        <CalculoEnergy>
          <CalculoInfo>
            <h1 style={{ marginTop: "10rem", paddingBottom: "2rem" }}>
              Produção de Energia Solar
            </h1>
            <h3>
              Preencha os campos abaixo para calcular a quantidade de energia
              (Wh) gerada por um painel solar ideal em 24 horas.
            </h3>
            <h3 style={{ paddingBottom: "1rem" }}>
              Selecione abaixo o valor da Potência da Placa Solar (W)
            </h3>
            <div style={{ display:"flex", alignItems:"center"}}>
              <Camp
                value={pmax}
                onChange={(e) => {
                  setPmax(e.target.value);
                }}
                ref={CampPmaxRef}
                type="number"
                placeholder="Potência (W)"
                style={{ marginBottom: "1.5rem", marginRight:"1rem"}}
              />
              <Button onClick={handleClick} ref={AvaliarRef}>
                Avaliar
              </Button>
            </div>
              <h3 style={{ marginBottom: "1rem" }}>
                Máximo = {maxSolar} e Mínimo = {minSolar}
              </h3>
          </CalculoInfo>

          <ResponsiveContainer width="60%" height={350}>
            <LineChart data={solarData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="time"
                label={{ value: "Hora do Dia", position: "top" }}
              />
              <YAxis
                label={{
                  value: "Energia (W)",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Potência" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
          <CalculoInfo2>
            <h2>Geração total de energia no dia: {parseInt(solarGera)} Wh</h2>

            {expressionRefInitial.current && (
              <h4 ref={expressionRefInitial}></h4>
            )}
            {expressionRefIntegra.current && (
              <h4 ref={expressionRefIntegra}></h4>
            )}
            {expressionRefSimplif.current && (
              <h4 ref={expressionRefSimplif}></h4>
            )}
            {expressionRefFinal.current && <h4 ref={expressionRefFinal}></h4>}

            <h2>Aproximação de Taylor para a origem 0</h2>
            <h3 ref={expressionTaylor}></h3>
            <h2>Demonstração do Cálculo:</h2>
            <div>
              <h4 style={{ textAlign: "left" }}>
                Para calcularmos o gráfico acima, é utilizada a seguinte
                fórmula:
              </h4>
              <h3 ref={expressionRefSolar} style={{ textAlign: "center" }}></h3>{" "}
              {/* Inserir fórmula Matemática*/}
            </div>
            <CalculoDesc>
              <h3>Onde:</h3>
              <ul>
                <li>
                  <h4>Pmax é a potência máxima que o painel pode gerar.</h4>
                </li>
                <li>
                  <h4>P(t) é a potência gerada em W.</h4>
                </li>
                <li>
                  <h4>t é o tempo em horas.</h4>
                </li>
              </ul>
            </CalculoDesc>
          </CalculoInfo2>
          <div style={{ margin: "3rem" }}>
            <h1 style={{ marginBottom: "2rem" }}>Produção de Energia Eólica</h1>
            <h3>
              Preencha as informações para calcular a capacidade de geração de
              energia de uma turbina eólica em função da velocidade do vento.
            </h3>
            <h3>Consulte essas informações no rótulo do aparelho.</h3>
          </div>
          <EnergiaEolica>
            <EnergiaEolicaList>
              <EnergiaEolicaComp>
                <p>Potência do Aerogerador (W)</p>
                <Camp
                  value={pmaxA}
                  onChange={(e) => {
                    setPmaxA(e.target.value);
                  }}
                  ref={CampPmaxARef}
                  type="Number"
                  placeholder="Potência do Aerogerador (W)"
                />
              </EnergiaEolicaComp>
              <EnergiaEolicaComp>
                <p>Velocidade de Corte (m/s)</p>
                <Camp
                  value={vc}
                  onChange={(e) => {
                    setVc(e.target.value);
                  }}
                  ref={CampVcRef}
                  type="Number"
                  placeholder="Velocidade de Corte (m/s)"
                />
              </EnergiaEolicaComp>
              <EnergiaEolicaComp>
                <p>Velocidade Nominal (m/s)</p>
                <Camp
                  value={vpmax}
                  onChange={(e) => {
                    setVpmax(e.target.value);
                  }}
                  ref={CampVPmaxRef}
                  type="Number"
                  placeholder="Velocidade para Potência Nominal (m/s)"
                />
              </EnergiaEolicaComp>
              <EnergiaEolicaComp>
                <p>Constante k da turbina</p>
                <Camp
                  value={k}
                  onChange={(e) => {
                    setK(e.target.value);
                  }}
                  ref={CampKRef}
                  type="Number"
                  placeholder="Constante k da turbina"
                />
              </EnergiaEolicaComp>
            </EnergiaEolicaList>
            <div>
              <h2 style={{ marginBottom: "2rem" }}>
                Máximo: {maxWind}, Mínimo: {minWind}
              </h2>
              <Button onClick={handleClick} ref={AvaliarRef}>
                Avaliar
              </Button>
            </div>
          </EnergiaEolica>
          <ResponsiveContainer width="60%" height={350}>
            <LineChart data={windData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="windSpeed"
                label={{ value: "Velocidade do Vento (m/s)", position: "top" }}
              />
              <YAxis
                label={{
                  value: "Energia (W)",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Potência" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
          <CalculoInfo2>
            <h2>Demonstração do Cálculo:</h2>
            <div style={{ margin: "3px", fontSize: "30px" }}>
              <p>{"Se v < Vc:"}</p>
              <p style={{ fontSize: "20px" }}>{"•     P(v) = 0"}</p>
              <p>{"Se Vc < v < Vr:"}</p>
              <p style={{ fontSize: "20px" }}>{"•     P(v) = k (v - Vc)³"}</p>
              <p>{"Se v > Vr:"}</p>
              <p style={{ fontSize: "20px" }}>{"•     P(v) = kPr"}</p>
            </div>
            {/*<img style={{height:'50%', width: '50%'}} src='/CalculoVento.jpg'></img>*/}
            {/* Inserir fórmula matématica para subistituir "{",
                    se não for possível deixar apenas essa parte em fotp png (foto com mais detalhes) */}
            <CalculoDesc>
              <h3>Onde:</h3>
              <ul>
                <li>
                  <h4>P(v) é a potência gerada em W</h4>
                </li>
                <li>
                  <h4>v é a velocidade do vento em m/s.</h4>
                </li>
                <li>
                  <h4>Vc é a velocidade mínima de vento.</h4>
                </li>
                <li>
                  <h4>
                    Vr é a velocidade do vento na qual a turbina gera sua
                    potência nominal.
                  </h4>
                </li>
                <li>
                  <h4>
                    k é uma constante que depende das caraterísticas da turbina.
                  </h4>
                </li>
              </ul>
            </CalculoDesc>
          </CalculoInfo2>
        </CalculoEnergy>
      </CalculoContainer>
    </>
  );
}

export default Calc;
