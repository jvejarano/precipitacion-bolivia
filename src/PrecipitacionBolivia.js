import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PrecipitacionBolivia = () => {
  // Extraer y preparar los datos
  const [anioSeleccionado, setAnioSeleccionado] = useState('todos');
  
  // Datos de precipitación anual por departamento
  const datos = [
    { anio: 1990, SUCRE: 533, LA_PAZ: 630, COCHABAMBA: 400, ORURO: 400, POTOSI: 290, TARIJA: 557, SANTA_CRUZ: 1347, TRINIDAD: 2477, COBIJA: 1947, EL_ALTO: 687 },
    { anio: 1991, SUCRE: 469, LA_PAZ: 444, COCHABAMBA: 312, ORURO: 206, POTOSI: 388, TARIJA: 685, SANTA_CRUZ: 1579, TRINIDAD: 1618, COBIJA: 1992, EL_ALTO: 454 },
    { anio: 1992, SUCRE: 599, LA_PAZ: 446, COCHABAMBA: 384, ORURO: 295, POTOSI: 290, TARIJA: 630, SANTA_CRUZ: 2249, TRINIDAD: 2879, COBIJA: 1868, EL_ALTO: 556 },
    { anio: 1993, SUCRE: 595, LA_PAZ: 474, COCHABAMBA: 398, ORURO: 444, POTOSI: 0, TARIJA: 629, SANTA_CRUZ: 1179, TRINIDAD: 1930, COBIJA: 1798, EL_ALTO: 642 },
    { anio: 1994, SUCRE: 459, LA_PAZ: 358, COCHABAMBA: 354, ORURO: 305, POTOSI: 231, TARIJA: 514, SANTA_CRUZ: 891, TRINIDAD: 2021, COBIJA: 1571, EL_ALTO: 578 },
    { anio: 1995, SUCRE: 614, LA_PAZ: 479, COCHABAMBA: 452, ORURO: 347, POTOSI: 104, TARIJA: 524, SANTA_CRUZ: 770, TRINIDAD: 2010, COBIJA: 1584, EL_ALTO: 609 },
    { anio: 1996, SUCRE: 571, LA_PAZ: 427, COCHABAMBA: 408, ORURO: 383, POTOSI: 318, TARIJA: 682, SANTA_CRUZ: 1399, TRINIDAD: 1828, COBIJA: 1864, EL_ALTO: 640 },
    { anio: 1997, SUCRE: 790, LA_PAZ: 609, COCHABAMBA: 518, ORURO: 490, POTOSI: 487, TARIJA: 417, SANTA_CRUZ: 1340, TRINIDAD: 2104, COBIJA: 1953, EL_ALTO: 673 },
    { anio: 1998, SUCRE: 434, LA_PAZ: 462, COCHABAMBA: 376, ORURO: 315, POTOSI: 273, TARIJA: 399, SANTA_CRUZ: 1234, TRINIDAD: 1735, COBIJA: 2057, EL_ALTO: 545 },
    { anio: 1999, SUCRE: 515, LA_PAZ: 529, COCHABAMBA: 436, ORURO: 489, POTOSI: 290, TARIJA: 616, SANTA_CRUZ: 704, TRINIDAD: 1543, COBIJA: 2018, EL_ALTO: 608 },
    { anio: 2000, SUCRE: 782, LA_PAZ: 479, COCHABAMBA: 337, ORURO: 381, POTOSI: 263, TARIJA: 603, SANTA_CRUZ: 1641, TRINIDAD: 1508, COBIJA: 1575, EL_ALTO: 589 },
    { anio: 2001, SUCRE: 756, LA_PAZ: 629, COCHABAMBA: 551, ORURO: 519, POTOSI: 440, TARIJA: 667, SANTA_CRUZ: 1585, TRINIDAD: 1498, COBIJA: 2353, EL_ALTO: 770 },
    { anio: 2002, SUCRE: 606, LA_PAZ: 612, COCHABAMBA: 330, ORURO: 400, POTOSI: 308, TARIJA: 507, SANTA_CRUZ: 1281, TRINIDAD: 1428, COBIJA: 1816, EL_ALTO: 717 },
    { anio: 2003, SUCRE: 603, LA_PAZ: 531, COCHABAMBA: 505, ORURO: 284, POTOSI: 332, TARIJA: 560, SANTA_CRUZ: 1364, TRINIDAD: 1413, COBIJA: 1948, EL_ALTO: 712 },
    { anio: 2004, SUCRE: 456, LA_PAZ: 454, COCHABAMBA: 563, ORURO: 229, POTOSI: 277, TARIJA: 547, SANTA_CRUZ: 904, TRINIDAD: 1700, COBIJA: 1846, EL_ALTO: 575 },
    { anio: 2005, SUCRE: 680, LA_PAZ: 428, COCHABAMBA: 412, ORURO: 483, POTOSI: 392, TARIJA: 710, SANTA_CRUZ: 1087, TRINIDAD: 1196, COBIJA: 1608, EL_ALTO: 556 },
    { anio: 2006, SUCRE: 734, LA_PAZ: 534, COCHABAMBA: 542, ORURO: 426, POTOSI: 329, TARIJA: 651, SANTA_CRUZ: 1175, TRINIDAD: 1663, COBIJA: 1920, EL_ALTO: 618 },
    { anio: 2007, SUCRE: 722, LA_PAZ: 553, COCHABAMBA: 450, ORURO: 351, POTOSI: 397, TARIJA: 612, SANTA_CRUZ: 1348, TRINIDAD: 2416, COBIJA: 1727, EL_ALTO: 639 },
    { anio: 2008, SUCRE: 657, LA_PAZ: 472, COCHABAMBA: 502, ORURO: 346, POTOSI: 258, TARIJA: 682, SANTA_CRUZ: 1587, TRINIDAD: 1615, COBIJA: 1813, EL_ALTO: 565 },
    { anio: 2009, SUCRE: 632, LA_PAZ: 544, COCHABAMBA: 395, ORURO: 569, POTOSI: 485, TARIJA: 516, SANTA_CRUZ: 1455, TRINIDAD: 1934, COBIJA: 3514, EL_ALTO: 580 },
    { anio: 2010, SUCRE: 369, LA_PAZ: 505, COCHABAMBA: 387, ORURO: 482, POTOSI: 266, TARIJA: 479, SANTA_CRUZ: 1221, TRINIDAD: 1688, COBIJA: 2565, EL_ALTO: 712 },
    { anio: 2011, SUCRE: 624, LA_PAZ: 497, COCHABAMBA: 484, ORURO: 482, POTOSI: 445, TARIJA: 653, SANTA_CRUZ: 1134, TRINIDAD: 1587, COBIJA: 1710, EL_ALTO: 513 },
    { anio: 2012, SUCRE: 614, LA_PAZ: 565, COCHABAMBA: 521, ORURO: 560, POTOSI: 347, TARIJA: 572, SANTA_CRUZ: 1676, TRINIDAD: 1954, COBIJA: 1781, EL_ALTO: 616 },
    { anio: 2013, SUCRE: 566, LA_PAZ: 478, COCHABAMBA: 527, ORURO: 613, POTOSI: 386, TARIJA: 441, SANTA_CRUZ: 1607, TRINIDAD: 1704, COBIJA: 1407, EL_ALTO: 648 },
    { anio: 2014, SUCRE: 491, LA_PAZ: 423, COCHABAMBA: 451, ORURO: 597, POTOSI: 370, TARIJA: 486, SANTA_CRUZ: 2375, TRINIDAD: 2672, COBIJA: 1942, EL_ALTO: 518 },
    { anio: 2015, SUCRE: 906, LA_PAZ: 605, COCHABAMBA: 421, ORURO: 519, POTOSI: 363, TARIJA: 759, SANTA_CRUZ: 1759, TRINIDAD: 1798, COBIJA: 1649, EL_ALTO: 652 },
    { anio: 2016, SUCRE: 411, LA_PAZ: 388, COCHABAMBA: 303, ORURO: 265, POTOSI: 268, TARIJA: 387, SANTA_CRUZ: 1252, TRINIDAD: 1348, COBIJA: 1713, EL_ALTO: 528 },
    { anio: 2017, SUCRE: 627, LA_PAZ: 467, COCHABAMBA: 381, ORURO: 433, POTOSI: 397, TARIJA: 496, SANTA_CRUZ: 1745, TRINIDAD: 2376, COBIJA: 1752, EL_ALTO: 626 },
    { anio: 2018, SUCRE: 649, LA_PAZ: 562, COCHABAMBA: 691, ORURO: 517, POTOSI: 469, TARIJA: 651, SANTA_CRUZ: 1611, TRINIDAD: 2302, COBIJA: 1688, EL_ALTO: 801 },
    { anio: 2019, SUCRE: 594, LA_PAZ: 542, COCHABAMBA: 330, ORURO: 363, POTOSI: 412, TARIJA: 562, SANTA_CRUZ: 1228, TRINIDAD: 2020, COBIJA: 2002, EL_ALTO: 607 },
    { anio: 2020, SUCRE: 465, LA_PAZ: 455, COCHABAMBA: 373, ORURO: 265, POTOSI: 446, TARIJA: 511, SANTA_CRUZ: 1320, TRINIDAD: 1816, COBIJA: 1362, EL_ALTO: 583 },
    { anio: 2021, SUCRE: 588, LA_PAZ: 499, COCHABAMBA: 508, ORURO: 341, POTOSI: 327, TARIJA: 395, SANTA_CRUZ: 1542, TRINIDAD: 1782, COBIJA: 1947, EL_ALTO: 665 },
    { anio: 2022, SUCRE: 421, LA_PAZ: 446, COCHABAMBA: 350, ORURO: 174, POTOSI: 443, TARIJA: 492, SANTA_CRUZ: 983, TRINIDAD: 1708, COBIJA: 1765, EL_ALTO: 537 },
    { anio: 2023, SUCRE: 522, LA_PAZ: 432, COCHABAMBA: 265, ORURO: 233, POTOSI: 482, TARIJA: 540, SANTA_CRUZ: 1272, TRINIDAD: 1364, COBIJA: 1419, EL_ALTO: 538 },
    { anio: 2024, SUCRE: 416, LA_PAZ: 565, COCHABAMBA: 467, ORURO: 327, POTOSI: 379, TARIJA: 437, SANTA_CRUZ: 1127, TRINIDAD: 2044, COBIJA: 1164, EL_ALTO: 622 },
    { anio: 2025, SUCRE: 184, LA_PAZ: 159, COCHABAMBA: 275, ORURO: 126, POTOSI: 114, TARIJA: 134, SANTA_CRUZ: 180, TRINIDAD: 232, COBIJA: 249, EL_ALTO: 211 }
  ];

  // Filtrar datos según el año seleccionado
  const datosFiltrados = anioSeleccionado === 'todos' 
    ? datos
    : datos.filter(d => d.anio === parseInt(anioSeleccionado));

  // Calcular promedios para cada departamento si se muestran todos los años
  const datosPromedio = anioSeleccionado === 'todos' 
    ? [{
        anio: 'Promedio',
        SUCRE: Math.round(datos.reduce((sum, d) => sum + d.SUCRE, 0) / (datos.length - 1)), // Excluir 2025 que solo tiene Enero
        LA_PAZ: Math.round(datos.reduce((sum, d) => sum + d.LA_PAZ, 0) / (datos.length - 1)),
        COCHABAMBA: Math.round(datos.reduce((sum, d) => sum + d.COCHABAMBA, 0) / (datos.length - 1)),
        ORURO: Math.round(datos.reduce((sum, d) => sum + d.ORURO, 0) / (datos.length - 1)),
        POTOSI: Math.round(datos.reduce((sum, d) => sum + d.POTOSI, 0) / (datos.length - 1)),
        TARIJA: Math.round(datos.reduce((sum, d) => sum + d.TARIJA, 0) / (datos.length - 1)),
        SANTA_CRUZ: Math.round(datos.reduce((sum, d) => sum + d.SANTA_CRUZ, 0) / (datos.length - 1)),
        TRINIDAD: Math.round(datos.reduce((sum, d) => sum + d.TRINIDAD, 0) / (datos.length - 1)),
        COBIJA: Math.round(datos.reduce((sum, d) => sum + d.COBIJA, 0) / (datos.length - 1)),
        EL_ALTO: Math.round(datos.reduce((sum, d) => sum + d.EL_ALTO, 0) / (datos.length - 1))
      }]
    : [];

  // Colores para cada departamento
  const colores = {
    SUCRE: '#8884d8',
    LA_PAZ: '#83a6ed',
    COCHABAMBA: '#8dd1e1',
    ORURO: '#82ca9d',
    POTOSI: '#a4de6c',
    TARIJA: '#d0ed57',
    SANTA_CRUZ: '#ffc658',
    TRINIDAD: '#ff8042',
    COBIJA: '#ff5252',
    EL_ALTO: '#da70d6'
  };

  // Función para formatear los valores en el tooltip
  const formatTooltipValue = (value) => {
    return `${value} mm`;
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h2 className="text-xl font-bold text-center mb-4">Precipitación Acumulada por Departamento en Bolivia (1990-2025)</h2>
      
      <div className="mb-4">
        <label htmlFor="anio-selector" className="mr-2 font-medium">Seleccionar Año:</label>
        <select 
          id="anio-selector"
          value={anioSeleccionado} 
          onChange={(e) => setAnioSeleccionado(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="todos">Todos los años</option>
          {datos.map(d => (
            <option key={d.anio} value={d.anio}>{d.anio}{d.anio === 2025 ? ' (Solo Enero)' : ''}</option>
          ))}
        </select>
      </div>
      
      <div className="border p-4 rounded-lg shadow-sm bg-white" style={{ height: '500px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={anioSeleccionado === 'todos' ? [...datosFiltrados.slice(0, -1), ...datosPromedio] : datosFiltrados}
            margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="anio" 
              angle={-45} 
              textAnchor="end" 
              height={80} 
              interval={0}
            />
            <YAxis label={{ value: 'Precipitación (mm)', angle: -90, position: 'insideLeft' }} />
            <Tooltip formatter={formatTooltipValue} />
            <Legend wrapperStyle={{ paddingTop: 20 }} />
            
            <Bar dataKey="SUCRE" name="Sucre" fill={colores.SUCRE} />
            <Bar dataKey="LA_PAZ" name="La Paz" fill={colores.LA_PAZ} />
            <Bar dataKey="COCHABAMBA" name="Cochabamba" fill={colores.COCHABAMBA} />
            <Bar dataKey="ORURO" name="Oruro" fill={colores.ORURO} />
            <Bar dataKey="POTOSI" name="Potosí" fill={colores.POTOSI} />
            <Bar dataKey="TARIJA" name="Tarija" fill={colores.TARIJA} />
            <Bar dataKey="SANTA_CRUZ" name="Santa Cruz" fill={colores.SANTA_CRUZ} />
            <Bar dataKey="TRINIDAD" name="Trinidad" fill={colores.TRINIDAD} />
            <Bar dataKey="COBIJA" name="Cobija" fill={colores.COBIJA} />
            <Bar dataKey="EL_ALTO" name="El Alto" fill={colores.EL_ALTO} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 text-sm text-gray-600">
        <p>Fuente: Instituto Nacional de Estadística y Servicio Nacional de Meteorología e Hidrología de Bolivia</p>
        <p>Nota: Un milímetro de precipitación equivale a un litro por metro cuadrado.</p>
        <p>* Los datos de 2025 solo incluyen el mes de enero.</p>
      </div>
    </div>
  );
};

export default PrecipitacionBolivia;