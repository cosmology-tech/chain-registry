import { AssetList } from '@chain-registry/types';

import * as _ethereum from './ethereum';
import * as _rootstock from './rootstock';
import * as _solana from './solana';
import * as _ton from './ton';
import * as _tron from './tron';
import * as _aaronetwork from './aaronetwork';
import * as _acrechain from './acrechain';
import * as _agoric from './agoric';
import * as _aioz from './aioz';
import * as _akash from './akash';
import * as _allora from './allora';
import * as _althea from './althea';
import * as _andromeda from './andromeda';
import * as _archway from './archway';
import * as _arkh from './arkh';
import * as _assetmantle from './assetmantle';
import * as _atomone from './atomone';
import * as _aura from './aura';
import * as _axelar from './axelar';
import * as _bandchain from './bandchain';
import * as _beezee from './beezee';
import * as _bitbadges from './bitbadges';
import * as _bitcanna from './bitcanna';
import * as _bitsong from './bitsong';
import * as _blockx from './blockx';
import * as _bluechip from './bluechip';
import * as _bluzelle from './bluzelle';
import * as _bostrom from './bostrom';
import * as _bouachain from './bouachain';
import * as _canto from './canto';
import * as _carbon from './carbon';
import * as _celestia from './celestia';
import * as _chain4energy from './chain4energy';
import * as _cheqd from './cheqd';
import * as _chihuahua from './chihuahua';
import * as _chimba from './chimba';
import * as _cifer from './cifer';
import * as _cnhostables from './cnhostables';
import * as _comdex from './comdex';
import * as _commercionetwork from './commercionetwork';
import * as _composable from './composable';
import * as _conscious from './conscious';
import * as _coreum from './coreum';
import * as _cosmoshub from './cosmoshub';
import * as _coss from './coss';
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
import * as _epix from './epix';
import * as _ethos from './ethos';
import * as _evmos from './evmos';
import * as _fetchhub from './fetchhub';
import * as _finschia from './finschia';
import * as _firmachain from './firmachain';
import * as _furya from './furya';
import * as _fxcore from './fxcore';
import * as _galaxy from './galaxy';
import * as _gateway from './gateway';
import * as _genesisl1 from './genesisl1';
import * as _ggezchain from './ggezchain';
import * as _gitopia from './gitopia';
import * as _govgen from './govgen';
import * as _gravitybridge from './gravitybridge';
import * as _haqq from './haqq';
import * as _heli from './heli';
import * as _highbury from './highbury';
import * as _humans from './humans';
import * as _idep from './idep';
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
import * as _lefeef from './lefeef';
import * as _likecoin from './likecoin';
import * as _logos from './logos';
import * as _loop from './loop';
import * as _lorenzo from './lorenzo';
import * as _loyal from './loyal';
import * as _lumnetwork from './lumnetwork';
import * as _mande from './mande';
import * as _mantrachain from './mantrachain';
import * as _mars from './mars';
import * as _mayachain from './mayachain';
import * as _medasdigital from './medasdigital';
import * as _meme from './meme';
import * as _migaloo from './migaloo';
import * as _milkyway from './milkyway';
import * as _mises from './mises';
import * as _mtgbp from './mtgbp';
import * as _mun from './mun';
import * as _mythos from './mythos';
import * as _neura from './neura';
import * as _neutaro from './neutaro';
import * as _neutron from './neutron';
import * as _nibiru from './nibiru';
import * as _nim from './nim';
import * as _noble from './noble';
import * as _nolus from './nolus';
import * as _nomic from './nomic';
import * as _nyx from './nyx';
import * as _octa from './octa';
import * as _odin from './odin';
import * as _okexchain from './okexchain';
import * as _omniflixhub from './omniflixhub';
import * as _onex from './onex';
import * as _onomy from './onomy';
import * as _opct from './opct';
import * as _oraichain from './oraichain';
import * as _osmosis from './osmosis';
import * as _paloma from './paloma';
import * as _panacea from './panacea';
import * as _passage from './passage';
import * as _persistence from './persistence';
import * as _planq from './planq';
import * as _point from './point';
import * as _provenance from './provenance';
import * as _pryzm from './pryzm';
import * as _pundix from './pundix';
import * as _pylons from './pylons';
import * as _qfs from './qfs';
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
import * as _sifchain from './sifchain';
import * as _six from './six';
import * as _sommelier from './sommelier';
import * as _source from './source';
import * as _stafihub from './stafihub';
import * as _stargaze from './stargaze';
import * as _starname from './starname';
import * as _stratos from './stratos';
import * as _stride from './stride';
import * as _sunrise from './sunrise';
import * as _synternet from './synternet';
import * as _taketitan from './taketitan';
import * as _tenet from './tenet';
import * as _teritori from './teritori';
import * as _terpnetwork from './terpnetwork';
import * as _terra from './terra';
import * as _terra2 from './terra2';
import * as _tgrade from './tgrade';
import * as _thorchain from './thorchain';
import * as _titan from './titan';
import * as _umee from './umee';
import * as _unicorn from './unicorn';
import * as _unification from './unification';
import * as _ununifi from './ununifi';
import * as _uptick from './uptick';
import * as _vector from './vector';
import * as _xion from './xion';
import * as _xpla from './xpla';
import * as _zenrock from './zenrock';
import * as _zetachain from './zetachain';

const assets: AssetList[] = [
  _ethereum.assets,
  _rootstock.assets,
  _solana.assets,
  _ton.assets,
  _tron.assets,
  _aaronetwork.assets,
  _acrechain.assets,
  _agoric.assets,
  _aioz.assets,
  _akash.assets,
  _allora.assets,
  _althea.assets,
  _andromeda.assets,
  _archway.assets,
  _arkh.assets,
  _assetmantle.assets,
  _atomone.assets,
  _aura.assets,
  _axelar.assets,
  _bandchain.assets,
  _beezee.assets,
  _bitbadges.assets,
  _bitcanna.assets,
  _bitsong.assets,
  _blockx.assets,
  _bluechip.assets,
  _bluzelle.assets,
  _bostrom.assets,
  _bouachain.assets,
  _canto.assets,
  _carbon.assets,
  _celestia.assets,
  _chain4energy.assets,
  _cheqd.assets,
  _chihuahua.assets,
  _chimba.assets,
  _cifer.assets,
  _cnhostables.assets,
  _comdex.assets,
  _commercionetwork.assets,
  _composable.assets,
  _conscious.assets,
  _coreum.assets,
  _cosmoshub.assets,
  _coss.assets,
  _crescent.assets,
  _cronos.assets,
  _cryptoorgchain.assets,
  _decentr.assets,
  _desmos.assets,
  _dhealth.assets,
  _doravota.assets,
  _dungeon.assets,
  _dydx.assets,
  _dymension.assets,
  _dyson.assets,
  _echelon.assets,
  _elys.assets,
  _emoney.assets,
  _empowerchain.assets,
  _epix.assets,
  _ethos.assets,
  _evmos.assets,
  _fetchhub.assets,
  _finschia.assets,
  _firmachain.assets,
  _furya.assets,
  _fxcore.assets,
  _galaxy.assets,
  _gateway.assets,
  _genesisl1.assets,
  _ggezchain.assets,
  _gitopia.assets,
  _govgen.assets,
  _gravitybridge.assets,
  _haqq.assets,
  _heli.assets,
  _highbury.assets,
  _humans.assets,
  _idep.assets,
  _impacthub.assets,
  _imversed.assets,
  _injective.assets,
  _int3face.assets,
  _irisnet.assets,
  _jackal.assets,
  _joltify.assets,
  _juno.assets,
  _kava.assets,
  _kichain.assets,
  _kimanetwork.assets,
  _konstellation.assets,
  _kopi.assets,
  _kujira.assets,
  _kyve.assets,
  _lambda.assets,
  _lava.assets,
  _lefeef.assets,
  _likecoin.assets,
  _logos.assets,
  _loop.assets,
  _lorenzo.assets,
  _loyal.assets,
  _lumnetwork.assets,
  _mande.assets,
  _mantrachain.assets,
  _mars.assets,
  _mayachain.assets,
  _medasdigital.assets,
  _meme.assets,
  _migaloo.assets,
  _milkyway.assets,
  _mises.assets,
  _mtgbp.assets,
  _mun.assets,
  _mythos.assets,
  _neura.assets,
  _neutaro.assets,
  _neutron.assets,
  _nibiru.assets,
  _nim.assets,
  _noble.assets,
  _nolus.assets,
  _nomic.assets,
  _nyx.assets,
  _octa.assets,
  _odin.assets,
  _okexchain.assets,
  _omniflixhub.assets,
  _onex.assets,
  _onomy.assets,
  _opct.assets,
  _oraichain.assets,
  _osmosis.assets,
  _paloma.assets,
  _panacea.assets,
  _passage.assets,
  _persistence.assets,
  _planq.assets,
  _point.assets,
  _provenance.assets,
  _pryzm.assets,
  _pundix.assets,
  _pylons.assets,
  _qfs.assets,
  _quasar.assets,
  _quicksilver.assets,
  _qwoyn.assets,
  _realio.assets,
  _rebus.assets,
  _regen.assets,
  _rizon.assets,
  _routerchain.assets,
  _saga.assets,
  _scorum.assets,
  _secretnetwork.assets,
  _seda.assets,
  _sei.assets,
  _self.assets,
  _sentinel.assets,
  _sge.assets,
  _shareledger.assets,
  _shentu.assets,
  _shido.assets,
  _sifchain.assets,
  _six.assets,
  _sommelier.assets,
  _source.assets,
  _stafihub.assets,
  _stargaze.assets,
  _starname.assets,
  _stratos.assets,
  _stride.assets,
  _sunrise.assets,
  _synternet.assets,
  _taketitan.assets,
  _tenet.assets,
  _teritori.assets,
  _terpnetwork.assets,
  _terra.assets,
  _terra2.assets,
  _tgrade.assets,
  _thorchain.assets,
  _titan.assets,
  _umee.assets,
  _unicorn.assets,
  _unification.assets,
  _ununifi.assets,
  _uptick.assets,
  _vector.assets,
  _xion.assets,
  _xpla.assets,
  _zenrock.assets,
  _zetachain.assets
];

export default assets;
