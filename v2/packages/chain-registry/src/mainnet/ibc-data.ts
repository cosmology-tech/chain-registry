import { IBCData } from '@chain-registry/types';

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

const ibcData: IBCData[] = [
  ..._ethereum.ibcData,
  ..._namada.ibcData,
  ..._penumbra.ibcData,
  ..._solana.ibcData,
  ..._aaronetwork.ibcData,
  ..._agoric.ibcData,
  ..._aioz.ibcData,
  ..._akash.ibcData,
  ..._allora.ibcData,
  ..._amitis.ibcData,
  ..._andromeda.ibcData,
  ..._archway.ibcData,
  ..._arkeo.ibcData,
  ..._arkh.ibcData,
  ..._assetmantle.ibcData,
  ..._atomone.ibcData,
  ..._aura.ibcData,
  ..._axelar.ibcData,
  ..._babylon.ibcData,
  ..._bandchain.ibcData,
  ..._beezee.ibcData,
  ..._bitbadges.ibcData,
  ..._bitcanna.ibcData,
  ..._bitsong.ibcData,
  ..._bitway.ibcData,
  ..._blg24.ibcData,
  ..._bluzelle.ibcData,
  ..._canto.ibcData,
  ..._carbon.ibcData,
  ..._celestia.ibcData,
  ..._chain4energy.ibcData,
  ..._cheqd.ibcData,
  ..._chihuahua.ibcData,
  ..._cifer.ibcData,
  ..._composable.ibcData,
  ..._conscious.ibcData,
  ..._coreum.ibcData,
  ..._cosmoshub.ibcData,
  ..._crescent.ibcData,
  ..._cronos.ibcData,
  ..._cryptoorgchain.ibcData,
  ..._decentr.ibcData,
  ..._desmos.ibcData,
  ..._divine.ibcData,
  ..._doravota.ibcData,
  ..._dungeon.ibcData,
  ..._dydx.ibcData,
  ..._dymension.ibcData,
  ..._echelon.ibcData,
  ..._empowerchain.ibcData,
  ..._epix.ibcData,
  ..._fandomchain.ibcData,
  ..._fetchhub.ibcData,
  ..._firmachain.ibcData,
  ..._furya.ibcData,
  ..._galaxy.ibcData,
  ..._gateway.ibcData,
  ..._genesisl1.ibcData,
  ..._gitopia.ibcData,
  ..._gnodi.ibcData,
  ..._gonka.ibcData,
  ..._gravitybridge.ibcData,
  ..._haqq.ibcData,
  ..._hazinachain.ibcData,
  ..._hippoprotocol.ibcData,
  ..._humans.ibcData,
  ..._hyve.ibcData,
  ..._impacthub.ibcData,
  ..._imversed.ibcData,
  ..._initia.ibcData,
  ..._injective.ibcData,
  ..._intento.ibcData,
  ..._irisnet.ibcData,
  ..._jackal.ibcData,
  ..._joltify.ibcData,
  ..._juno.ibcData,
  ..._kava.ibcData,
  ..._kimanetwork.ibcData,
  ..._konstellation.ibcData,
  ..._kopi.ibcData,
  ..._kujira.ibcData,
  ..._kyve.ibcData,
  ..._lava.ibcData,
  ..._likecoin.ibcData,
  ..._lombardledger.ibcData,
  ..._lorenzo.ibcData,
  ..._lumen.ibcData,
  ..._lumera.ibcData,
  ..._lumnetwork.ibcData,
  ..._mande.ibcData,
  ..._manifest.ibcData,
  ..._mantrachain.ibcData,
  ..._medasdigital.ibcData,
  ..._meme.ibcData,
  ..._migaloo.ibcData,
  ..._mirage.ibcData,
  ..._mtgbp.ibcData,
  ..._mucoin.ibcData,
  ..._neutaro.ibcData,
  ..._neutron.ibcData,
  ..._nibiru.ibcData,
  ..._nim.ibcData,
  ..._noble.ibcData,
  ..._nolus.ibcData,
  ..._nomic.ibcData,
  ..._nvnmchain.ibcData,
  ..._nyx.ibcData,
  ..._okexchain.ibcData,
  ..._optio.ibcData,
  ..._oraichain.ibcData,
  ..._osmosis.ibcData,
  ..._panacea.ibcData,
  ..._passage.ibcData,
  ..._paxi.ibcData,
  ..._persistence.ibcData,
  ..._planq.ibcData,
  ..._point.ibcData,
  ..._provenance.ibcData,
  ..._pundix.ibcData,
  ..._pylons.ibcData,
  ..._qfs.ibcData,
  ..._qie.ibcData,
  ..._quicksilver.ibcData,
  ..._qwoyn.ibcData,
  ..._realio.ibcData,
  ..._regen.ibcData,
  ..._ritbit.ibcData,
  ..._rizon.ibcData,
  ..._safrochain.ibcData,
  ..._saga.ibcData,
  ..._scorum.ibcData,
  ..._secretnetwork.ibcData,
  ..._seda.ibcData,
  ..._sei.ibcData,
  ..._self.ibcData,
  ..._sentinel.ibcData,
  ..._sge.ibcData,
  ..._shareledger.ibcData,
  ..._shentu.ibcData,
  ..._shido.ibcData,
  ..._sidechain.ibcData,
  ..._sifchain.ibcData,
  ..._sommelier.ibcData,
  ..._source.ibcData,
  ..._sovr.ibcData,
  ..._stratos.ibcData,
  ..._stride.ibcData,
  ..._sunrise.ibcData,
  ..._symphony.ibcData,
  ..._synternet.ibcData,
  ..._tail.ibcData,
  ..._taketitan.ibcData,
  ..._teritori.ibcData,
  ..._terra.ibcData,
  ..._terra2.ibcData,
  ..._thejaynetwork.ibcData,
  ..._titan.ibcData,
  ..._turkchain.ibcData,
  ..._unification.ibcData,
  ..._uptick.ibcData,
  ..._wolochain.ibcData,
  ..._xion.ibcData,
  ..._xpla.ibcData,
  ..._xrplevm.ibcData,
  ..._zenrock.ibcData,
  ..._zigchain.ibcData
];

export default ibcData;
