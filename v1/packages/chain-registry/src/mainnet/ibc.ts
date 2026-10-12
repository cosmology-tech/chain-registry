import { IBCInfo } from '@chain-registry/types';

import * as _ethereum from './ethereum';
import * as _namada from './namada';
import * as _penumbra from './penumbra';
import * as _solana from './solana';
import * as _aaronetwork from './aaronetwork';
import * as _agoric from './agoric';
import * as _aioz from './aioz';
import * as _akash from './akash';
import * as _allora from './allora';
import * as _amitis from './amitis';
import * as _andromeda from './andromeda';
import * as _archway from './archway';
import * as _arkeo from './arkeo';
import * as _arkh from './arkh';
import * as _assetmantle from './assetmantle';
import * as _atomone from './atomone';
import * as _aura from './aura';
import * as _axelar from './axelar';
import * as _babylon from './babylon';
import * as _bandchain from './bandchain';
import * as _beezee from './beezee';
import * as _bitbadges from './bitbadges';
import * as _bitcanna from './bitcanna';
import * as _bitsong from './bitsong';
import * as _bitway from './bitway';
import * as _blg24 from './blg24';
import * as _bluzelle from './bluzelle';
import * as _canto from './canto';
import * as _carbon from './carbon';
import * as _celestia from './celestia';
import * as _chain4energy from './chain4energy';
import * as _cheqd from './cheqd';
import * as _chihuahua from './chihuahua';
import * as _cifer from './cifer';
import * as _composable from './composable';
import * as _conscious from './conscious';
import * as _coreum from './coreum';
import * as _cosmoshub from './cosmoshub';
import * as _crescent from './crescent';
import * as _cronos from './cronos';
import * as _cryptoorgchain from './cryptoorgchain';
import * as _decentr from './decentr';
import * as _desmos from './desmos';
import * as _divine from './divine';
import * as _doravota from './doravota';
import * as _dungeon from './dungeon';
import * as _dydx from './dydx';
import * as _dymension from './dymension';
import * as _echelon from './echelon';
import * as _empowerchain from './empowerchain';
import * as _epix from './epix';
import * as _fandomchain from './fandomchain';
import * as _fetchhub from './fetchhub';
import * as _firmachain from './firmachain';
import * as _furya from './furya';
import * as _galaxy from './galaxy';
import * as _gateway from './gateway';
import * as _genesisl1 from './genesisl1';
import * as _gitopia from './gitopia';
import * as _gnodi from './gnodi';
import * as _gonka from './gonka';
import * as _gravitybridge from './gravitybridge';
import * as _haqq from './haqq';
import * as _hazinachain from './hazinachain';
import * as _hippoprotocol from './hippoprotocol';
import * as _humans from './humans';
import * as _hyve from './hyve';
import * as _impacthub from './impacthub';
import * as _imversed from './imversed';
import * as _initia from './initia';
import * as _injective from './injective';
import * as _intento from './intento';
import * as _irisnet from './irisnet';
import * as _jackal from './jackal';
import * as _joltify from './joltify';
import * as _juno from './juno';
import * as _kava from './kava';
import * as _kimanetwork from './kimanetwork';
import * as _konstellation from './konstellation';
import * as _kopi from './kopi';
import * as _kujira from './kujira';
import * as _kyve from './kyve';
import * as _lava from './lava';
import * as _likecoin from './likecoin';
import * as _lombardledger from './lombardledger';
import * as _lorenzo from './lorenzo';
import * as _lumen from './lumen';
import * as _lumera from './lumera';
import * as _lumnetwork from './lumnetwork';
import * as _mande from './mande';
import * as _manifest from './manifest';
import * as _mantrachain from './mantrachain';
import * as _medasdigital from './medasdigital';
import * as _meme from './meme';
import * as _migaloo from './migaloo';
import * as _mirage from './mirage';
import * as _mtgbp from './mtgbp';
import * as _mucoin from './mucoin';
import * as _neutaro from './neutaro';
import * as _neutron from './neutron';
import * as _nibiru from './nibiru';
import * as _nim from './nim';
import * as _noble from './noble';
import * as _nolus from './nolus';
import * as _nomic from './nomic';
import * as _nvnmchain from './nvnmchain';
import * as _nyx from './nyx';
import * as _okexchain from './okexchain';
import * as _optio from './optio';
import * as _oraichain from './oraichain';
import * as _osmosis from './osmosis';
import * as _panacea from './panacea';
import * as _passage from './passage';
import * as _paxi from './paxi';
import * as _persistence from './persistence';
import * as _planq from './planq';
import * as _point from './point';
import * as _provenance from './provenance';
import * as _pundix from './pundix';
import * as _pylons from './pylons';
import * as _qfs from './qfs';
import * as _qie from './qie';
import * as _quicksilver from './quicksilver';
import * as _qwoyn from './qwoyn';
import * as _realio from './realio';
import * as _regen from './regen';
import * as _ritbit from './ritbit';
import * as _rizon from './rizon';
import * as _safrochain from './safrochain';
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
import * as _sovr from './sovr';
import * as _stratos from './stratos';
import * as _stride from './stride';
import * as _sunrise from './sunrise';
import * as _symphony from './symphony';
import * as _synternet from './synternet';
import * as _tail from './tail';
import * as _taketitan from './taketitan';
import * as _teritori from './teritori';
import * as _terra from './terra';
import * as _terra2 from './terra2';
import * as _thejaynetwork from './thejaynetwork';
import * as _titan from './titan';
import * as _turkchain from './turkchain';
import * as _unification from './unification';
import * as _uptick from './uptick';
import * as _wolochain from './wolochain';
import * as _xion from './xion';
import * as _xpla from './xpla';
import * as _xrplevm from './xrplevm';
import * as _zenrock from './zenrock';
import * as _zigchain from './zigchain';

const ibc: IBCInfo[] = [
  ..._ethereum.ibc,
  ..._namada.ibc,
  ..._penumbra.ibc,
  ..._solana.ibc,
  ..._aaronetwork.ibc,
  ..._agoric.ibc,
  ..._aioz.ibc,
  ..._akash.ibc,
  ..._allora.ibc,
  ..._amitis.ibc,
  ..._andromeda.ibc,
  ..._archway.ibc,
  ..._arkeo.ibc,
  ..._arkh.ibc,
  ..._assetmantle.ibc,
  ..._atomone.ibc,
  ..._aura.ibc,
  ..._axelar.ibc,
  ..._babylon.ibc,
  ..._bandchain.ibc,
  ..._beezee.ibc,
  ..._bitbadges.ibc,
  ..._bitcanna.ibc,
  ..._bitsong.ibc,
  ..._bitway.ibc,
  ..._blg24.ibc,
  ..._bluzelle.ibc,
  ..._canto.ibc,
  ..._carbon.ibc,
  ..._celestia.ibc,
  ..._chain4energy.ibc,
  ..._cheqd.ibc,
  ..._chihuahua.ibc,
  ..._cifer.ibc,
  ..._composable.ibc,
  ..._conscious.ibc,
  ..._coreum.ibc,
  ..._cosmoshub.ibc,
  ..._crescent.ibc,
  ..._cronos.ibc,
  ..._cryptoorgchain.ibc,
  ..._decentr.ibc,
  ..._desmos.ibc,
  ..._divine.ibc,
  ..._doravota.ibc,
  ..._dungeon.ibc,
  ..._dydx.ibc,
  ..._dymension.ibc,
  ..._echelon.ibc,
  ..._empowerchain.ibc,
  ..._epix.ibc,
  ..._fandomchain.ibc,
  ..._fetchhub.ibc,
  ..._firmachain.ibc,
  ..._furya.ibc,
  ..._galaxy.ibc,
  ..._gateway.ibc,
  ..._genesisl1.ibc,
  ..._gitopia.ibc,
  ..._gnodi.ibc,
  ..._gonka.ibc,
  ..._gravitybridge.ibc,
  ..._haqq.ibc,
  ..._hazinachain.ibc,
  ..._hippoprotocol.ibc,
  ..._humans.ibc,
  ..._hyve.ibc,
  ..._impacthub.ibc,
  ..._imversed.ibc,
  ..._initia.ibc,
  ..._injective.ibc,
  ..._intento.ibc,
  ..._irisnet.ibc,
  ..._jackal.ibc,
  ..._joltify.ibc,
  ..._juno.ibc,
  ..._kava.ibc,
  ..._kimanetwork.ibc,
  ..._konstellation.ibc,
  ..._kopi.ibc,
  ..._kujira.ibc,
  ..._kyve.ibc,
  ..._lava.ibc,
  ..._likecoin.ibc,
  ..._lombardledger.ibc,
  ..._lorenzo.ibc,
  ..._lumen.ibc,
  ..._lumera.ibc,
  ..._lumnetwork.ibc,
  ..._mande.ibc,
  ..._manifest.ibc,
  ..._mantrachain.ibc,
  ..._medasdigital.ibc,
  ..._meme.ibc,
  ..._migaloo.ibc,
  ..._mirage.ibc,
  ..._mtgbp.ibc,
  ..._mucoin.ibc,
  ..._neutaro.ibc,
  ..._neutron.ibc,
  ..._nibiru.ibc,
  ..._nim.ibc,
  ..._noble.ibc,
  ..._nolus.ibc,
  ..._nomic.ibc,
  ..._nvnmchain.ibc,
  ..._nyx.ibc,
  ..._okexchain.ibc,
  ..._optio.ibc,
  ..._oraichain.ibc,
  ..._osmosis.ibc,
  ..._panacea.ibc,
  ..._passage.ibc,
  ..._paxi.ibc,
  ..._persistence.ibc,
  ..._planq.ibc,
  ..._point.ibc,
  ..._provenance.ibc,
  ..._pundix.ibc,
  ..._pylons.ibc,
  ..._qfs.ibc,
  ..._qie.ibc,
  ..._quicksilver.ibc,
  ..._qwoyn.ibc,
  ..._realio.ibc,
  ..._regen.ibc,
  ..._ritbit.ibc,
  ..._rizon.ibc,
  ..._safrochain.ibc,
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
  ..._sovr.ibc,
  ..._stratos.ibc,
  ..._stride.ibc,
  ..._sunrise.ibc,
  ..._symphony.ibc,
  ..._synternet.ibc,
  ..._tail.ibc,
  ..._taketitan.ibc,
  ..._teritori.ibc,
  ..._terra.ibc,
  ..._terra2.ibc,
  ..._thejaynetwork.ibc,
  ..._titan.ibc,
  ..._turkchain.ibc,
  ..._unification.ibc,
  ..._uptick.ibc,
  ..._wolochain.ibc,
  ..._xion.ibc,
  ..._xpla.ibc,
  ..._xrplevm.ibc,
  ..._zenrock.ibc,
  ..._zigchain.ibc
];

export default ibc;
