import * as React from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
  ZoomableGroup,
} from 'react-simple-maps'

import { scaleLinear } from 'd3-scale'

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json'

const colorScale = scaleLinear<string>()
  .domain([0.29, 0.68])
  .range(['#ffedea', '#ff5233'])

interface Props {
  setTooltipContent: (x: string) => unknown
  data: Array<Record<string, any>>
}

function MapChart({ setTooltipContent, data }: Props) {
  return (
    <>
      <ComposableMap
        data-tip=""
        projectionConfig={{
          rotate: [30, 0, 0],
          scale: 147,
          center: [0, -30],
        }}>
        <ZoomableGroup>
          <Sphere
            id="rsm-sphere"
            fill="white"
            stroke="#E4E5E6"
            strokeWidth={0.5}
          />
          <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
          {data.length > 0 && (
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const d = data.find((s) => s.ISO3 === geo.properties.ISO_A3)
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => {
                        const { NAME } = geo.properties
                        setTooltipContent(`${NAME}`)
                      }}
                      onMouseLeave={() => {
                        setTooltipContent('')
                      }}
                      fill={d ? colorScale(d['2017']) : '#F5F4F6'}
                      style={{
                        default: {
                          outline: 'none',
                        },
                        hover: {
                          outline: 'none',
                        },
                        pressed: {
                          outline: 'none',
                        },
                      }}
                    />
                  )
                })
              }
            </Geographies>
          )}
        </ZoomableGroup>
      </ComposableMap>
    </>
  )
}
export default React.memo(MapChart)
