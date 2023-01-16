import { useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { tokens } from "../theme";
import { geoFeatures } from "../data/mockGeoFeatures";
import { mockGeographyData as data } from "../data/mockData";

const GeoChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveChoropleth
      data={data}
      features={geoFeatures.features}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        // Changes the default behavior of the hover info 
        tooltip: {
          container: {
            background: "#ffffff",
            color: "#333333",
            fontSize: 12,
          },
        },
      }}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      // This is the provded color scheme. It doesn't match the colors of the app
      // so its commented out. Turns out that removing it causes the colors to
      // default to a theme that works more with the site.
      // colors="nivo"
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      // Added this to change the projection scale when on the dashboard or the
      // regular page. Zooms in on the reg page since there's more room
      projectionScale={isDashboard ? 40 : 150}
      // Changed these values from initial ones.
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      // This is the grid behind the map
      enableGraticule={false}
      graticuleLineColor="#dddddd"
      borderWidth={1.5}
      borderColor="#152538"
      // Removed to match the color scheme
      // defs={[
      //     {
      //         id: 'dots',
      //         type: 'patternDots',
      //         background: 'inherit',
      //         color: '#38bcb2',
      //         size: 4,
      //         padding: 1,
      //         stagger: true
      //     },
      //     {
      //         id: 'lines',
      //         type: 'patternLines',
      //         background: 'inherit',
      //         color: '#eed312',
      //         rotation: -45,
      //         lineWidth: 6,
      //         spacing: 10
      //     },
      //     {
      //         id: 'gradient',
      //         type: 'linearGradient',
      //         colors: [
      //             {
      //                 offset: 0,
      //                 color: '#000'
      //             },
      //             {
      //                 offset: 100,
      //                 color: 'inherit'
      //             }
      //         ]
      //     }
      // ]}
      fill={[
        {
          match: {
            id: "CAN",
          },
          id: "dots",
        },
        {
          match: {
            id: "CHN",
          },
          id: "lines",
        },
        {
          match: {
            id: "ATA",
          },
          id: "gradient",
        },
      ]}
      // Remove the legend if on dashboard
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: colors.grey[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#fffff",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
};

export default GeoChart;
