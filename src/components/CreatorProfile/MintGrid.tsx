import styled from "@emotion/styled";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 16px;
`;

const MintCardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: var(--border-radius);
`;

const MintCardName = styled.div`
  font-family: "Montserrat Alternates";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  letter-spacing: 0.045em;
`;

const MintCard = ({ mint }: any) => {
  return (
    <div>
      <MintCardImage src={mint.image} />
      <MintCardName>{mint.name}</MintCardName>
    </div>
  );
};

type MintGridProps = {
  mints: any[];
};

const MintGrid = ({ mints }: MintGridProps) => {
  return (
    <Grid>
      {mints.map((mint) => (
        <MintCard key={mint.id} mint={mint} />
      ))}
    </Grid>
  );
};

export default MintGrid;
