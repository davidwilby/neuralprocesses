Search.setIndex({"docnames": ["advanced_usage", "architectures", "basic_usage", "build_your_own_model", "coders", "intro"], "filenames": ["advanced_usage.md", "architectures.rst", "basic_usage.md", "build_your_own_model.md", "coders.rst", "intro.md"], "titles": ["Advanced Usage", "List of Predefined Architectures", "Basic Usage", "Build Your Own Model", "List of Coders", "NeuralProcesses"], "terms": {"In": [0, 1, 2, 4], "thi": [0, 1, 2, 4], "section": 0, "we": [0, 2, 3], "ll": 0, "take": [0, 4], "follow": 0, "convgnp": [0, 1], "run": [0, 3, 4], "exampl": 0, "import": [0, 2, 3], "lab": [0, 2, 3], "b": [0, 2, 3], "torch": [0, 2], "neuralprocess": [0, 1, 2, 3, 4], "np": [0, 2, 3], "cnp": [0, 2], "construct_convgnp": [0, 1, 2], "dim_x": [0, 1, 2, 3, 4], "2": [0, 1, 2, 3, 4], "dim_yc": [0, 1, 2], "1": [0, 1, 2, 3, 4], "two": [0, 2, 3, 4], "both": [0, 2, 3], "one": [0, 1, 2, 4], "channel": [0, 1, 2, 3, 4], "dim_yt": [0, 1, 2], "construct": [0, 1, 3], "sampl": [0, 2], "grid": [0, 1, 2, 3], "xc": 0, "randn": [0, 2, 3], "float32": [0, 2, 3], "20": 0, "yc": 0, "xc_grid": 0, "10": [0, 2, 3], "15": [0, 1, 2, 3], "yc_grid": 0, "contruct": 0, "target": [0, 1, 2, 3, 4], "xt": 0, "50": 0, "For": [0, 2], "predict": [0, 2], "can": [0, 1, 2, 3, 4], "made": 0, "via": 0, "pred": 0, "suppos": [0, 4], "due": 0, "reason": 0, "you": [0, 1], "didn": 0, "t": 0, "observ": [0, 2], "5": [0, 1, 4], "specif": [0, 2, 4], "abov": 0, "possibl": 0, "just": [0, 4], "omit": 0, "element": [0, 4], "The": [0, 2, 3, 4], "propos": 0, "solut": 0, "A": [0, 1, 4], "tensor": [0, 4], "same": [0, 1], "output": [0, 1, 2, 3, 4], "case": [0, 1, 4], "onli": [0, 1], "consist": [0, 3], "ones": 0, "zero": 0, "If": [0, 1, 4], "i": [0, 4], "0": [0, 1, 3], "j": [0, 1], "k": 0, "mean": [0, 1, 2], "On": 0, "other": 0, "hand": 0, "still": 0, "have": [0, 1, 2, 3], "valu": [0, 1, 4], "which": [0, 2, 3, 4], "must": [0, 1, 2, 4], "nan": 0, "those": [0, 4], "ignor": 0, "To": 0, "definit": 0, "masked_yc": 0, "shape": [0, 4], "3": [0, 1, 2, 3], "also": [0, 1, 2, 3, 4], "non": 0, "7": [0, 3], "ar": [0, 1, 2, 3, 4], "miss": 0, "had": 0, "anoth": [0, 3], "xc2": 0, "30": 0, "yc2": 0, "xc2_grid": 0, "yc2_grid": 0, "rather": [0, 1, 4], "than": [0, 1, 4], "model": [0, 2, 4], "onc": 0, "would": 0, "like": [0, 2], "concaten": [0, 3, 4], "along": 0, "dimens": [0, 2, 4], "howev": 0, "doesn": 0, "work": [0, 1, 2], "becaus": 0, "twe": 0, "pad": 0, "align": 0, "them": 0, "reject": 0, "function": [0, 1, 3, 4], "merge_context": 0, "do": 0, "automat": 0, "xc_merg": 0, "yc_merg": 0, "xc1": 0, "yc1": 0, "xc_grid_merg": 0, "yc_grid_merg": 0, "concat": 0, "axi": 0, "jonni": 0, "taylor": 0, "ha": [0, 2], "creat": [0, 3], "veri": 0, "help": [0, 1], "gist": 0, "verifi": 0, "version": 0, "gnp": 1, "construct_gnp": [1, 2], "dim_i": [1, 2, 3, 4], "none": [1, 3, 4], "dim_embed": [1, 4], "256": 1, "fals": [1, 4], "attention_num_head": 1, "8": [1, 3, 4], "num_enc_lay": [1, 4], "enc_sam": 1, "num_dec_lay": 1, "6": 1, "width": [1, 4], "512": [1, 3], "nonlinear": [1, 4], "relu": [1, 4], "likelihood": [1, 2], "lowrank": [1, 2], "num_basis_funct": [1, 2], "dim_lv": 1, "lv_likelihood": 1, "het": 1, "transform": 1, "dtype": [1, 4], "modul": [1, 4], "from": [1, 2, 4], "home": 1, "runner": 1, "__init__": 1, "py": 1, "sourc": [1, 4], "gaussian": 1, "neural": 1, "process": 1, "paramet": [1, 4], "int": [1, 4], "option": [1, 4], "dimension": [1, 2, 3, 4], "input": [1, 2, 3, 4], "default": [1, 4], "tupl": [1, 4], "context": [1, 2, 3], "should": [1, 4], "equal": [1, 3, 4], "want": 1, "us": [1, 2, 3, 4], "multipl": [1, 2, 3, 4], "integ": 1, "indic": [1, 4], "respect": 1, "embed": [1, 3, 4], "128": [1, 3], "bool": [1, 4], "determinist": 1, "encod": [1, 2, 3, 4], "number": [1, 2, 3, 4], "head": [1, 4], "layer": [1, 3, 4], "all": [1, 4], "decod": [1, 3], "intermedi": [1, 4], "mlp": [1, 2, 3, 4], "callabl": [1, 4], "str": [1, 4], "specifi": [1, 2, 4], "string": [1, 4], "leakyrelu": [1, 4], "basi": 1, "low": 1, "rank": 1, "latent": 1, "variabl": 1, "dens": [1, 4], "spike": 1, "beta": 1, "float": [1, 4], "biject": 1, "appli": [1, 4], "deal": [1, 2], "posit": 1, "bound": 1, "data": [1, 2, 3, 4], "either": 1, "exp": 1, "softplu": 1, "softplus_of_squar": 1, "lower": 1, "upper": 1, "open": 1, "interv": 1, "type": [1, 4], "return": [1, 4], "agnp": 1, "construct_agnp": 1, "arg": [1, 4], "num_head": [1, 4], "kw_arg": [1, 4], "an": [1, 2, 4], "dim_aux_t": [1, 2, 3], "points_per_unit": [1, 3, 4], "64": [1, 2, 3, 4], "margin": [1, 3], "conv_arch": 1, "unet": [1, 3, 4], "unet_channel": 1, "unet_kernel": 1, "unet_strid": 1, "unet_activ": 1, "unet_resize_conv": 1, "unet_resize_conv_interp_method": 1, "nearest": [1, 4], "conv_receptive_field": 1, "conv_lay": 1, "conv_channel": 1, "encoder_scal": 1, "encoder_scales_learn": 1, "true": [1, 4], "decoder_scal": 1, "decoder_scale_learn": 1, "aux_t_mlp_lay": 1, "divide_by_dens": 1, "epsilon": [1, 4], "0001": 1, "attribut": 1, "receptive_field": [1, 4], "recept": [1, 4], "field": [1, 4], "auxiliari": 1, "densiti": [1, 3, 4], "intern": 1, "discretis": [1, 3, 4], "re": 1, "sep": 1, "conv": [1, 3, 4], "everi": [1, 3, 4], "six": [1, 4], "each": [1, 4], "size": [1, 2, 4], "kernel": [1, 4], "stride": [1, 4], "object": [1, 4], "activ": [1, 4], "resiz": [1, 4], "transpos": [1, 4], "interpol": [1, 4], "method": [1, 4], "bilinear": [1, 4], "standard": [1, 4], "initi": [1, 4], "length": [1, 3, 4], "scale": [1, 3, 4], "whether": [1, 4], "setconv": [1, 3, 4], "s": [1, 2, 4], "learnabl": [1, 4], "three": [1, 2], "divid": [1, 4], "ad": [1, 4], "befor": [1, 3, 4], "1e": [1, 4], "4": [1, 2], "fullconvgnp": 1, "construct_fullconvgnp": 1, "kernel_factor": 1, "factor": 1, "reduc": 1, "cnn": [1, 3], "point": [1, 2], "per": 1, "unit": 1, "put": [1, 3, 4], "foot": 1, "construct_climate_convgnp_mlp": 1, "width_lr": 1, "lr_deg": 1, "75": 1, "downscal": 1, "refer": 1, "vaughan": 1, "w": 1, "tebbutt": 1, "hosk": 1, "r": 1, "e": 1, "turner": 1, "2022": 1, "condit": 1, "local": 1, "geoscientif": 1, "develop": 1, "page": 1, "251": 1, "268": 1, "url": 1, "http": 1, "gmd": 1, "copernicu": 1, "org": 1, "articl": 1, "resolut": 1, "residu": [1, 4], "network": 1, "construct_climate_convgnp_multir": 1, "width_mr": 1, "width_hr": 1, "width_bridg": 1, "mr_deg": 1, "hr_deg": 1, "01": 1, "multi": [1, 4], "fusion": 1, "medium": 1, "high": 1, "pass": 1, "between": 1, "extra": [1, 2], "end": 1, "design": 2, "plan": 2, "support": 2, "jax": 2, "alwai": 2, "c": 2, "n": [2, 4], "where": [2, 4], "batch": 2, "convent": 2, "extend": 2, "wai": [2, 3], "first": [2, 4], "singl": 2, "here": [2, 3], "interpret": 2, "write": 2, "b1": 2, "b2": 2, "second": [2, 3, 4], "imag": 2, "n1": 2, "n2": 2, "intepret": 2, "conclus": 2, "dist": [2, 3], "16": [2, 3, 4], "var": 2, "print": 2, "logpdf": 2, "kl": 2, "entropi": 2, "tf": [2, 3], "third": 2, "four": 2, "inform": [2, 3], "observed_data": 2, "defin": 2, "arbitrari": 2, "aux_var1": 2, "12": [2, 3], "aux_var2": 2, "25": 2, "35": 2, "could": 2, "illustr": 2, "how": 2, "style": 2, "match": 2, "aux_var_t": 2, "aux_t": [2, 3], "given": [2, 3], "keyword": [2, 4], "argument": [2, 4], "offer": 3, "block": [3, 4], "togeth": 3, "variou": 3, "suit": 3, "particular": [3, 4], "applic": 3, "yet": 3, "architectur": [3, 4], "dim": [3, 4], "in_channel": [3, 4], "out_channel": [3, 4], "32": [3, 4], "disc": [3, 4], "num_halving_lay": [3, 4], "functionalcod": [3, 4], "chain": 3, "prependdensitychannel": [3, 4], "dividebyfirstchannel": [3, 4], "deterministiclikelihood": 3, "lowrankgaussianlikelihood": 3, "some": 3, "random": 3, "set": 3, "dim_y2": 3, "separ": [3, 4], "initialis": 3, "parallel": [3, 4], "augment": [3, 4], "ani": [3, 4], "current": [3, 4], "proceed": 3, "come": 3, "out": 3, "plu": 3, "in_dim": [3, 4], "out_dim": [3, 4], "class": 4, "deepset": 4, "phi": 4, "agg": 4, "lambda": 4, "pre": 4, "sum": 4, "inputscod": 4, "_self": 4, "dim_head": 4, "encoder_x": 4, "encoder_xi": 4, "pair": 4, "mixer": 4, "mlp1": 4, "final": 4, "normalis": 4, "ln1": 4, "mlp2": 4, "ln2": 4, "selfattent": 4, "self": 4, "valid": 4, "sensit": 4, "code": 4, "represent": 4, "abstractdiscretis": 4, "desir": 4, "contain": 4, "span": 4, "over": 4, "log_scal": 4, "logarithm": 4, "scalar": 4, "08": 4, "add": 4, "dividebyfirsthalf": 4, "half": 4, "prepend": 4, "produc": 4, "prependmultidensitychannel": 4, "ident": 4, "prependidentitychannel": 4, "nn": 4, "union": 4, "flexibl": 4, "sequenc": 4, "depthwis": 4, "make": 4, "net": 4, "convnet": 4, "num_lay": 4, "regular": 4, "correspond": 4, "overrid": 4, "comput": 4, "done": 4, "conv_net": 4, "linear": 4, "hidden": 4, "expect": 4, "differ": 4, "format": 4, "residualblock": 4, "layer1": 4, "layer2": 4, "layer_post": 4, "branch": 4, "after": 4, "resize_conv": 4, "resize_conv_interp_method": 4, "before_turn_lay": 4, "u": 4, "turn": 4, "after_turn_lay": 4, "repeatforaggregateinputpair": 4, "encount": 4, "perform": 4, "oper": 4, "select_channel_i": 4, "select_channel_j": 4, "select": 4, "repeatforaggregateinput": 4, "select_channel": 4, "index": 4, "selectfromchannel": 4, "size0": 4, "within": 4, "th": 4, "assum": 4, "further": 4, "reshap": 4, "happen": 4, "_last_": 4, "unpack": 4, "selectfromdensecovariancechannel": 4, "covari": 4, "assertnoaugment": 4, "assert": 4, "remov": 4, "assertnoparallel": 4, "exactli": 4, "assertparallel": 4, "restructureparallel": 4, "new": 4, "restructur": 4, "thing": 4, "structur": 4, "splitter": 4, "split": 4, "squeezeparallel": 4, "fuse": 4, "set_conv": 4, "result": 4, "mapdiag": 4, "mapdiagon": 4, "map": 4, "diagon": 4, "squar": 4, "space": 4, "densecov": 4, "densecovariancepsdtransform": 4, "multipli": 4, "itself": 4, "ensur": 4, "psd": 4, "fromdensecovari": 4, "todensecovari": 4, "welcom": 5, "packag": 5}, "objects": {"neuralprocesses.architectures": [[1, 0, 0, "-", "agnp"], [1, 0, 0, "-", "climate"], [1, 0, 0, "-", "convgnp"], [1, 0, 0, "-", "fullconvgnp"], [1, 0, 0, "-", "gnp"]], "neuralprocesses.architectures.agnp": [[1, 1, 1, "", "construct_agnp"]], "neuralprocesses.architectures.climate": [[1, 1, 1, "", "construct_climate_convgnp_mlp"], [1, 1, 1, "", "construct_climate_convgnp_multires"]], "neuralprocesses.architectures.convgnp": [[1, 1, 1, "", "construct_convgnp"]], "neuralprocesses.architectures.fullconvgnp": [[1, 1, 1, "", "construct_fullconvgnp"]], "neuralprocesses.architectures.gnp": [[1, 1, 1, "", "construct_gnp"]], "neuralprocesses.coders": [[4, 0, 0, "-", "aggregate"], [4, 0, 0, "-", "attention"], [4, 0, 0, "-", "augment"], [4, 0, 0, "-", "copy"], [4, 0, 0, "-", "deepset"], [4, 0, 0, "-", "densecov"], [4, 0, 0, "-", "functional"], [4, 0, 0, "-", "fuse"], [4, 0, 0, "-", "inputs"], [4, 0, 0, "-", "mapdiag"], [4, 0, 0, "-", "nn"], [4, 0, 0, "-", "shaping"]], "neuralprocesses.coders.aggregate": [[4, 2, 1, "", "RepeatForAggregateInputPairs"], [4, 2, 1, "", "RepeatForAggregateInputs"], [4, 2, 1, "", "SelectFromChannels"], [4, 2, 1, "", "SelectFromDenseCovarianceChannels"]], "neuralprocesses.coders.attention": [[4, 2, 1, "", "Attention"], [4, 2, 1, "", "SelfAttention"]], "neuralprocesses.coders.attention.Attention": [[4, 3, 1, "", "dim_head"], [4, 3, 1, "", "encoder_x"], [4, 3, 1, "", "encoder_xy"], [4, 3, 1, "", "ln1"], [4, 3, 1, "", "ln2"], [4, 3, 1, "", "mixer"], [4, 3, 1, "", "mlp1"], [4, 3, 1, "", "mlp2"], [4, 3, 1, "", "num_heads"]], "neuralprocesses.coders.attention.SelfAttention": [[4, 3, 1, "", "dim_head"], [4, 3, 1, "", "encoder_x"], [4, 3, 1, "", "encoder_xy"], [4, 3, 1, "", "ln1"], [4, 3, 1, "", "ln2"], [4, 3, 1, "", "mixer"], [4, 3, 1, "", "mlp1"], [4, 3, 1, "", "mlp2"], [4, 3, 1, "", "num_heads"]], "neuralprocesses.coders.augment": [[4, 2, 1, "", "AssertNoAugmentation"], [4, 2, 1, "", "Augment"]], "neuralprocesses.coders.augment.Augment": [[4, 3, 1, "", "coder"]], "neuralprocesses.coders.deepset": [[4, 2, 1, "", "DeepSet"]], "neuralprocesses.coders.deepset.DeepSet": [[4, 3, 1, "", "agg"], [4, 3, 1, "", "phi"]], "neuralprocesses.coders.densecov": [[4, 2, 1, "", "DenseCovariancePSDTransform"], [4, 2, 1, "", "FromDenseCovariance"], [4, 2, 1, "", "ToDenseCovariance"]], "neuralprocesses.coders.functional": [[4, 2, 1, "", "FunctionalCoder"]], "neuralprocesses.coders.functional.FunctionalCoder": [[4, 3, 1, "", "coder"], [4, 3, 1, "", "disc"], [4, 3, 1, "", "target"]], "neuralprocesses.coders.fuse": [[4, 2, 1, "", "Fuse"]], "neuralprocesses.coders.fuse.Fuse": [[4, 3, 1, "", "set_conv"]], "neuralprocesses.coders.inputs": [[4, 2, 1, "", "InputsCoder"]], "neuralprocesses.coders.mapdiag": [[4, 2, 1, "", "MapDiagonal"]], "neuralprocesses.coders.mapdiag.MapDiagonal": [[4, 3, 1, "", "coder"]], "neuralprocesses.coders.nn": [[4, 2, 1, "", "Conv"], [4, 2, 1, "", "ConvNet"], [4, 2, 1, "", "Linear"], [4, 2, 1, "", "MLP"], [4, 2, 1, "", "ResidualBlock"], [4, 2, 1, "", "UNet"]], "neuralprocesses.coders.nn.Conv": [[4, 3, 1, "", "dim"], [4, 3, 1, "", "net"]], "neuralprocesses.coders.nn.ConvNet": [[4, 3, 1, "", "conv_net"], [4, 3, 1, "", "dim"], [4, 3, 1, "", "kernel"], [4, 3, 1, "", "num_halving_layers"], [4, 3, 1, "", "receptive_field"]], "neuralprocesses.coders.nn.Linear": [[4, 3, 1, "", "net"]], "neuralprocesses.coders.nn.MLP": [[4, 3, 1, "", "net"]], "neuralprocesses.coders.nn.ResidualBlock": [[4, 3, 1, "", "layer1"], [4, 3, 1, "", "layer2"], [4, 3, 1, "", "layer_post"]], "neuralprocesses.coders.nn.UNet": [[4, 3, 1, "", "activations"], [4, 3, 1, "", "after_turn_layers"], [4, 3, 1, "", "before_turn_layers"], [4, 3, 1, "", "dim"], [4, 3, 1, "", "kernels"], [4, 3, 1, "", "num_halving_layers"], [4, 3, 1, "", "receptive_field"], [4, 3, 1, "", "receptive_fields"], [4, 3, 1, "", "strides"]], "neuralprocesses.coders.setconv": [[4, 0, 0, "-", "density"], [4, 0, 0, "-", "identity"], [4, 0, 0, "-", "setconv"]], "neuralprocesses.coders.setconv.density": [[4, 2, 1, "", "DivideByFirstChannel"], [4, 2, 1, "", "DivideByFirstHalf"], [4, 2, 1, "", "PrependDensityChannel"], [4, 2, 1, "", "PrependMultiDensityChannel"]], "neuralprocesses.coders.setconv.density.DivideByFirstChannel": [[4, 3, 1, "", "epsilon"]], "neuralprocesses.coders.setconv.density.DivideByFirstHalf": [[4, 3, 1, "", "epsilon"]], "neuralprocesses.coders.setconv.identity": [[4, 2, 1, "", "PrependIdentityChannel"]], "neuralprocesses.coders.setconv.setconv": [[4, 2, 1, "", "SetConv"]], "neuralprocesses.coders.setconv.setconv.SetConv": [[4, 3, 1, "", "log_scale"]], "neuralprocesses.coders.shaping": [[4, 2, 1, "", "AssertNoParallel"], [4, 2, 1, "", "AssertParallel"], [4, 2, 1, "", "Identity"], [4, 2, 1, "", "RestructureParallel"], [4, 2, 1, "", "Splitter"], [4, 2, 1, "", "SqueezeParallel"]], "neuralprocesses.coders.shaping.AssertParallel": [[4, 3, 1, "", "n"]], "neuralprocesses.coders.shaping.RestructureParallel": [[4, 3, 1, "", "current"], [4, 3, 1, "", "new"]], "neuralprocesses.coders.shaping.Splitter": [[4, 3, 1, "", "sizes"]]}, "objtypes": {"0": "py:module", "1": "py:function", "2": "py:class", "3": "py:attribute"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "function", "Python function"], "2": ["py", "class", "Python class"], "3": ["py", "attribute", "Python attribute"]}, "titleterms": {"advanc": 0, "usag": [0, 2], "mask": 0, "particular": 0, "input": 0, "us": 0, "batch": 0, "context": 0, "set": [0, 1, 4], "differ": 0, "size": 0, "equival": 0, "pytorch": [0, 2, 3], "tensorflow": [0, 2, 3], "architectur": [0, 1], "list": [1, 4], "predefin": 1, "deep": [1, 4], "base": 1, "np": 1, "attent": [1, 4], "convolut": [1, 4], "fulli": 1, "specif": 1, "model": [1, 3], "climat": 1, "experi": 1, "basic": 2, "backend": 2, "agnost": 2, "shape": 2, "tensor": 2, "exampl": [2, 3], "gnp": 2, "convgnp": [2, 3], "auxiliari": [2, 3, 4], "variabl": [2, 3, 4], "build": 3, "your": 3, "own": 3, "coder": 4, "neural": 4, "network": 4, "aggreg": 4, "util": 4, "neuralprocess": 5}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx.ext.viewcode": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})