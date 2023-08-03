import ReactTooltip from 'react-tooltip';
import styles from '../styles';

const healthPoints = 10;

const healthLevel = (points) => (points >= 12 ? 'bg-blue-400' : points >= 6 ? 'bg-orange-500' : 'bg-red-500');
const marginIndexing = (index) => (index !== healthPoints - 1 ? 'mr-1' : 'mr-0');

const PlayerInfo = ({ player, playerIcon, mt }) => (
  <div className={`${styles.flexCenter}  ${mt ? 'mt-4' : 'mb-4' }`}>
    <img data-for={`Player-${mt ? '1' : '2'}`} data-tip src={playerIcon} alt="player02" className="w-0 h-0 object-contain rounded-full" />

    <div
      data-for={`Mana-${mt ? '1' : '2'}`}
      data-tip={`Mana: ${player.mana}`}
      className={styles.playerHealth}
    >
      {[...Array(player.health).keys()].map((item, index) => (
        <div
          key={`player-item-${item}`}
          className={`${styles.playerHealthBar} ${healthLevel(player.health)} ${marginIndexing(index)}`}
        />
      ))}
    </div>

    <div
      data-for={`Mana-${mt ? '1' : '2'}`}
      data-tip="Mana"
      className={`${styles.flexCenter} ${styles.glassEffect} ${styles.playerMana}`}
    >
      {player.mana || 0}
    </div> 
    <div
      data-for={`Health-${mt ? '1' : '2'}`}
      data-tip="Health"
    className={`${styles.flexCenter} ${styles.glassEffect} ${styles.playerMana}`} style={{ backgroundColor: '#8a0303',marginLeft: '20px' }}>
    
      {player.health || 0}
    </div>

    <ReactTooltip id={`Player-${mt ? '1' : '2'}`} effect="solid" backgroundColor="#7f46f0">
      <p className={styles.playerInfo}>
        <span className={styles.playerInfoSpan}>Name:</span> {player?.playerName}
      </p>
      <p className={styles.playerInfo}>
        <span className={styles.playerInfoSpan}>Address:</span> {player?.playerAddress?.slice(0, 10)}
      </p>
    </ReactTooltip>
    <ReactTooltip id={`Health-${mt ? '1' : '2'}`} effect="solid" backgroundColor="#7f46f0" />
    <ReactTooltip id={`Mana-${mt ? '1' : '2'}`} effect="solid" backgroundColor="#7f46f0" />
  </div>
);

export default PlayerInfo;
