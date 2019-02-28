import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const History = () => {
  return (
    <div>
      <Paper className="paperHistory">
        <a href="/" className="button-volver">
          Volver
        </a>
        <Grid>
          <div className="lockup">
            <h2 className="lockup--heading" id="js-mainHeading">
              Brastlewark
            </h2>
          </div>
          <p>
            Brastlewark is an almost exclusively gnomish city in eastern
            Cheliax, located on the western edge of the Aspodell Mountains, at
            the head of the Brastle River. It is believed to be the largest
            gnome settlement in the Inner Sea region, perhaps even in the entire
            world.
          </p>
        </Grid>
        <Grid>
          <div className="detailTown">
            <p>
              <span>Nation:</span> Cheliax
              <span>Region:</span> Archduchy of Sirmium
              <span>Size:</span> Large town
              <span>Population:</span> 1,335
              <span>Government:</span> Overlord
              <span>Alignment:</span> Chaotic neutral
            </p>
          </div>
        </Grid>

        <h3>Inhabitants</h3>
        <p>
          The city has a proportionately large population of bards, wizards,
          alchemists and artists, and the gnomish need for new experiences
          guarantees that the look of Brastlewark undergoes constant
          modification. Because of this focus on design and architecture,
          Brastlewark's architects and engineers are particularly well-known,
          and often possess a distinct ability to incorporate disparate elements
          into innovative new designs.
        </p>

        <h3>Geography</h3>
        <p>
          Brastlewark is easily one of the most architecturally idiosyncratic
          and unusual settlements in otherwise dour Cheliax. It is a confusing
          hodge-podge of various styles and design concepts with its crooked
          streets, unexpected dead ends, and outlandishly shaped public parks.
          Most of the buildings look like they are on the verge of collapse,
          with clashing additional floors and annexes stacked next to and on top
          of one another, but most are actually quite structurally sound. A few
          times a year, however, an ambitious gnome hoping to outclass his
          neighbors in building height or extravagance, pushes the boundaries
          too far and causes his and neighboring structures to come crashing
          down.
        </p>

        <h3>Commerce</h3>
        <p>
          Brastlewark is known as a center of design and industry, focusing
          specifically on the creation of alchemical items and material spell
          components, and clockwork. The creation and procurement of spell
          components is a particular focus of the city's residents, and its
          traders export them all over Avistan and Garund.
        </p>

        <h3>Government</h3>
        <p>
          The city is governed by the self-proclaimed King Drum Thornfiddle, who
          is an open vassal of Queen Abrogail II.
        </p>
      </Paper>
    </div>
  );
};

export default History;
