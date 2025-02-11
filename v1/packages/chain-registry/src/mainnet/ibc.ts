import { IBCInfo } from '@chain-registry/types';

import * as _ethereum from './ethereum';
import * as _solana from './solana';
import * as _aaronetwork from './aaronetwork';
import * as _acrechain from './acrechain';
import * as _agoric from './agoric';
import * as _aioz from './aioz';
import * as _akash from './akash';
import * as _andromeda from './andromeda';
import * as _archway from './archway';
import * as _arkh from './arkh';
import * as _assetmantle from './assetmantle';
import * as _atomone from './atomone';
import * as _aura from './aura';
import * as _axelar from './axelar';
import * as _bandchain from './bandchain';
import * as _beezee from './beezee';
import * as _bitcanna from './bitcanna';
import * as _bitsong from './bitsong';
import * as _bluzelle from './bluzelle';
import * as _bostrom from './bostrom';
import * as _canto from './canto';
import * as _carbon from './carbon';
import * as _celestia from './celestia';
import * as _chain4energy from './chain4energy';
import * as _cheqd from './cheqd';
import * as _chihuahua from './chihuahua';
import * as _cifer from './cifer';
import * as _comdex from './comdex';
import * as _composable from './composable';
import * as _conscious from './conscious';
import * as _coreum from './coreum';
import * as _cosmoshub from './cosmoshub';
import * as _crescent from './crescent';
import * as _cronos from './cronos';
import * as _cryptoorgchain from './cryptoorgchain';
import * as _decentr from './decentr';
import * as _desmos from './desmos';
import * as _dhealth from './dhealth';
import * as _doravota from './doravota';
import * as _dungeon from './dungeon';
import * as _dydx from './dydx';
import * as _dymension from './dymension';
import * as _dyson from './dyson';
import * as _echelon from './echelon';
import * as _elys from './elys';
import * as _emoney from './emoney';
import * as _empowerchain from './empowerchain';
import * as _evmos from './evmos';
import * as _fetchhub from './fetchhub';
import * as _firmachain from './firmachain';
import * as _furya from './furya';
import * as _fxcore from './fxcore';
import * as _galaxy from './galaxy';
import * as _gateway from './gateway';
import * as _genesisl1 from './genesisl1';
import * as _gitopia from './gitopia';
import * as _gravitybridge from './gravitybridge';
import * as _haqq from './haqq';
import * as _humans from './humans';
import * as _impacthub from './impacthub';
import * as _imversed from './imversed';
import * as _injective from './injective';
import * as _int3face from './int3face';
import * as _irisnet from './irisnet';
import * as _jackal from './jackal';
import * as _joltify from './joltify';
import * as _juno from './juno';
import * as _kava from './kava';
import * as _kichain from './kichain';
import * as _kimanetwork from './kimanetwork';
import * as _konstellation from './konstellation';
import * as _kopi from './kopi';
import * as _kujira from './kujira';
import * as _kyve from './kyve';
import * as _lambda from './lambda';
import * as _lava from './lava';
import * as _likecoin from './likecoin';
import * as _lorenzo from './lorenzo';
import * as _lumnetwork from './lumnetwork';
import * as _mande from './mande';
import * as _mantrachain from './mantrachain';
import * as _mars from './mars';
import * as _medasdigital from './medasdigital';
import * as _meme from './meme';
import * as _migaloo from './migaloo';
import * as _milkyway from './milkyway';
import * as _neutaro from './neutaro';
import * as _neutron from './neutron';
import * as _nibiru from './nibiru';
import * as _nim from './nim';
import * as _noble from './noble';
import * as _nolus from './nolus';
import * as _nomic from './nomic';
import * as _nyx from './nyx';
import * as _odin from './odin';
import * as _okexchain from './okexchain';
import * as _omniflixhub from './omniflixhub';
import * as _onex from './onex';
import * as _onomy from './onomy';
import * as _oraichain from './oraichain';
import * as _osmosis from './osmosis';
import * as _panacea from './panacea';
import * as _passage from './passage';
import * as _persistence from './persistence';
import * as _planq from './planq';
import * as _point from './point';
import * as _provenance from './provenance';
import * as _pryzm from './pryzm';
import * as _pundix from './pundix';
import * as _pylons from './pylons';
import * as _quasar from './quasar';
import * as _quicksilver from './quicksilver';
import * as _qwoyn from './qwoyn';
import * as _realio from './realio';
import * as _rebus from './rebus';
import * as _regen from './regen';
import * as _rizon from './rizon';
import * as _routerchain from './routerchain';
import * as _saga from './saga';
import * as _scorum from './scorum';
import * as _secretnetwork from './secretnetwork';
import * as _seda from './seda';
import * as _sei from './sei';
import * as _self from './self';
import * as _sentinel from './sentinel';
import * as _sge from './sge';
import * as _shareledger from './shareledger';
import * as _shentu from './shentu';
import * as _shido from './shido';
import * as _sidechain from './sidechain';
import * as _sifchain from './sifchain';
import * as _sommelier from './sommelier';
import * as _source from './source';
import * as _stafihub from './stafihub';
import * as _stargaze from './stargaze';
import * as _starname from './starname';
import * as _stratos from './stratos';
import * as _stride from './stride';
import * as _synternet from './synternet';
import * as _teritori from './teritori';
import * as _terra from './terra';
import * as _terra2 from './terra2';
import * as _tgrade from './tgrade';
import * as _titan from './titan';
import * as _umee from './umee';
import * as _unification from './unification';
import * as _uptick from './uptick';
import * as _xion from './xion';
import * as _xpla from './xpla';
import * as _zenrock from './zenrock';

const ibc: IBCInfo[] = [
  ..._ethereum.ibc,
  ..._solana.ibc,
  ..._aaronetwork.ibc,
  ..._acrechain.ibc,
  ..._agoric.ibc,
  ..._aioz.ibc,
  ..._akash.ibc,
  ..._andromeda.ibc,
  ..._archway.ibc,
  ..._arkh.ibc,
  ..._assetmantle.ibc,
  ..._atomone.ibc,
  ..._aura.ibc,
  ..._axelar.ibc,
  ..._bandchain.ibc,
  ..._beezee.ibc,
  ..._bitcanna.ibc,
  ..._bitsong.ibc,
  ..._bluzelle.ibc,
  ..._bostrom.ibc,
  ..._canto.ibc,
  ..._carbon.ibc,
  ..._celestia.ibc,
  ..._chain4energy.ibc,
  ..._cheqd.ibc,
  ..._chihuahua.ibc,
  ..._cifer.ibc,
  ..._comdex.ibc,
  ..._composable.ibc,
  ..._conscious.ibc,
  ..._coreum.ibc,
  ..._cosmoshub.ibc,
  ..._crescent.ibc,
  ..._cronos.ibc,
  ..._cryptoorgchain.ibc,
  ..._decentr.ibc,
  ..._desmos.ibc,
  ..._dhealth.ibc,
  ..._doravota.ibc,
  ..._dungeon.ibc,
  ..._dydx.ibc,
  ..._dymension.ibc,
  ..._dyson.ibc,
  ..._echelon.ibc,
  ..._elys.ibc,
  ..._emoney.ibc,
  ..._empowerchain.ibc,
  ..._evmos.ibc,
  ..._fetchhub.ibc,
  ..._firmachain.ibc,
  ..._furya.ibc,
  ..._fxcore.ibc,
  ..._galaxy.ibc,
  ..._gateway.ibc,
  ..._genesisl1.ibc,
  ..._gitopia.ibc,
  ..._gravitybridge.ibc,
  ..._haqq.ibc,
  ..._humans.ibc,
  ..._impacthub.ibc,
  ..._imversed.ibc,
  ..._injective.ibc,
  ..._int3face.ibc,
  ..._irisnet.ibc,
  ..._jackal.ibc,
  ..._joltify.ibc,
  ..._juno.ibc,
  ..._kava.ibc,
  ..._kichain.ibc,
  ..._kimanetwork.ibc,
  ..._konstellation.ibc,
  ..._kopi.ibc,
  ..._kujira.ibc,
  ..._kyve.ibc,
  ..._lambda.ibc,
  ..._lava.ibc,
  ..._likecoin.ibc,
  ..._lorenzo.ibc,
  ..._lumnetwork.ibc,
  ..._mande.ibc,
  ..._mantrachain.ibc,
  ..._mars.ibc,
  ..._medasdigital.ibc,
  ..._meme.ibc,
  ..._migaloo.ibc,
  ..._milkyway.ibc,
  ..._neutaro.ibc,
  ..._neutron.ibc,
  ..._nibiru.ibc,
  ..._nim.ibc,
  ..._noble.ibc,
  ..._nolus.ibc,
  ..._nomic.ibc,
  ..._nyx.ibc,
  ..._odin.ibc,
  ..._okexchain.ibc,
  ..._omniflixhub.ibc,
  ..._onex.ibc,
  ..._onomy.ibc,
  ..._oraichain.ibc,
  ..._osmosis.ibc,
  ..._panacea.ibc,
  ..._passage.ibc,
  ..._persistence.ibc,
  ..._planq.ibc,
  ..._point.ibc,
  ..._provenance.ibc,
  ..._pryzm.ibc,
  ..._pundix.ibc,
  ..._pylons.ibc,
  ..._quasar.ibc,
  ..._quicksilver.ibc,
  ..._qwoyn.ibc,
  ..._realio.ibc,
  ..._rebus.ibc,
  ..._regen.ibc,
  ..._rizon.ibc,
  ..._routerchain.ibc,
  ..._saga.ibc,
  ..._scorum.ibc,
  ..._secretnetwork.ibc,
  ..._seda.ibc,
  ..._sei.ibc,
  ..._self.ibc,
  ..._sentinel.ibc,
  ..._sge.ibc,
  ..._shareledger.ibc,
  ..._shentu.ibc,
  ..._shido.ibc,
  ..._sidechain.ibc,
  ..._sifchain.ibc,
  ..._sommelier.ibc,
  ..._source.ibc,
  ..._stafihub.ibc,
  ..._stargaze.ibc,
  ..._starname.ibc,
  ..._stratos.ibc,
  ..._stride.ibc,
  ..._synternet.ibc,
  ..._teritori.ibc,
  ..._terra.ibc,
  ..._terra2.ibc,
  ..._tgrade.ibc,
  ..._titan.ibc,
  ..._umee.ibc,
  ..._unification.ibc,
  ..._uptick.ibc,
  ..._xion.ibc,
  ..._xpla.ibc,
  ..._zenrock.ibc
];

export default ibc;
