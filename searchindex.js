Search.setIndex({"docnames": ["0.intro", "1.sources-variance", "2.fixed-effects", "3.mixed-effects", "4.summary-stats", "5.building-models", "7.group-spm"], "filenames": ["0.intro.ipynb", "1.sources-variance.ipynb", "2.fixed-effects.ipynb", "3.mixed-effects.ipynb", "4.summary-stats.ipynb", "5.building-models.ipynb", "7.group-spm.ipynb"], "titles": ["Introduction", "Sources of Variance", "Fixed-effects: The Wrong Way", "Mixed-effects: The Best Way", "Summary Statistics: The SPM Way", "Building Group-level Models", "Group-level Modelling in SPM"], "terms": {"we": [0, 1, 2, 3, 4, 5, 6], "have": [0, 1, 2, 3, 4, 5, 6], "alreadi": [0, 4, 5, 6], "seen": [0, 3, 4, 5], "how": [0, 1, 2, 3, 4, 5, 6], "us": [0, 1, 3, 4, 6], "glm": [0, 1, 2, 3, 4, 5, 6], "analys": [0, 3, 4, 5, 6], "fmri": [0, 1, 2, 3, 4], "data": [0, 1, 2, 3, 4, 5, 6], "from": [0, 1, 2, 3, 4, 5, 6], "singl": [0, 1, 2, 4, 5, 6], "subject": [0, 4, 5, 6], "i": [0, 1, 3, 4, 5, 6], "rare": 0, "ar": [0, 1, 2, 3, 4, 5], "interest": [0, 1, 2, 3, 4, 5], "onli": [0, 1, 2, 3, 4, 5], "one": [0, 1, 2, 3, 5], "typic": [0, 5], "group": [0, 1, 2, 3, 4], "perhap": [0, 2], "multipl": [0, 1, 5, 6], "wish": 0, "compar": [0, 3, 5], "In": [0, 1, 2, 3, 5], "thi": [0, 1, 2, 3, 4, 5, 6], "lesson": [0, 1, 5, 6], "see": [0, 1, 2, 3, 5], "can": [0, 1, 2, 3, 4, 5, 6], "framework": [0, 3, 4, 5], "help": 0, "u": [0, 1, 2, 3, 5], "combin": [0, 3, 4], "result": [0, 3, 5], "level": [0, 1, 3, 4], "analysi": [0, 1, 3, 4], "usual": [0, 1, 3], "repres": [0, 1, 2, 3, 5], "our": [0, 1, 2, 3, 4, 5], "final": [0, 4], "aim": 0, "when": [0, 1, 2, 3, 4], "thu": [0, 3, 4], "draw": [0, 1, 3], "close": [0, 1], "process": [0, 1, 6], "take": [0, 1, 2, 3, 4, 5], "raw": [0, 1, 2, 3, 4, 5, 6], "turn": [0, 3], "readi": 0, "public": 0, "sourc": [0, 3, 4], "varianc": [0, 2, 4, 5], "fix": [0, 3], "effect": [0, 1, 4, 5], "The": [0, 5, 6], "wrong": 0, "wai": [0, 5], "mix": [0, 4], "best": 0, "summari": [0, 3], "statist": [0, 2, 3, 5], "spm": [0, 1, 2, 3, 5], "build": 0, "model": [0, 2, 4], "dr": 0, "martyn": 0, "mcfarquhar": 0, "phd": 0, "fhea": 0, "lectur": 0, "neuroimag": [0, 5], "4": [0, 1, 5], "31": 0, "booth": 0, "street": 0, "east": 0, "divis": 0, "psychologi": 0, "commun": [0, 2], "human": 0, "neurosci": 0, "school": 0, "health": 0, "scienc": 0, "univers": [0, 3], "manchest": 0, "m13": 0, "9pl": 0, "t": [0, 6], "44": 0, "0": [0, 2, 3, 5], "161": 0, "275": 0, "2688": 0, "e": [0, 3], "ac": 0, "uk": 0, "befor": 1, "explor": 1, "kei": [1, 5], "concept": [1, 3], "need": [1, 2, 3, 4, 5], "understand": [1, 2, 3, 5], "each": [1, 2, 3, 4, 5, 6], "two": [1, 3, 4], "gener": [1, 2, 3, 5], "reason": [1, 2, 4], "why": [1, 2, 4], "differ": [1, 3, 4, 5, 6], "next": [1, 3], "One": [1, 3], "intern": [1, 2], "consist": [1, 2], "other": [1, 3, 5], "To": [1, 2, 3, 5], "make": [1, 2, 3, 4, 5], "clearer": [1, 5], "fig": [1, 2, 3, 4, 5], "1": [1, 2, 3, 5], "show": [1, 3, 5, 6], "some": [1, 2, 3, 5], "hypothet": 1, "3": [1, 5], "who": [1, 3, 6], "were": [1, 3, 5, 6], "5": [1, 2, 5], "time": [1, 2, 3, 5], "here": [1, 3, 5, 6], "distinct": 1, "pattern": [1, 5], "correspond": [1, 2, 3], "point": [1, 3, 5], "while": 1, "These": [1, 3, 5, 6], "illustr": [1, 3, 4, 5], "across": [1, 2, 3, 4], "creat": [1, 3, 5], "spread": [1, 2, 4], "around": [1, 2, 3, 4], "": [1, 2, 3], "mean": [1, 2, 3, 4, 5], "2": [1, 2, 3, 5], "where": [1, 2, 3, 5], "orang": 1, "line": [1, 3, 5], "individu": [1, 2, 3, 4], "mu_1": [1, 5], "mu_2": [1, 5], "mu_3": 1, "indic": [1, 2, 3], "dash": [1, 3], "vertic": [1, 3], "For": [1, 3, 4, 5, 6], "therefor": [1, 2, 3, 5], "calcul": [1, 2, 3, 4, 5], "valu": [1, 3, 5], "captur": [1, 3, 4], "own": [1, 2], "person": 1, "degre": [1, 4, 5], "error": [1, 2, 3, 4, 5], "tell": [1, 2, 5], "smaller": [1, 2, 3], "more": [1, 5], "seri": [1, 2, 5], "think": [1, 3], "shown": [1, 2, 3, 4, 5], "200": 1, "odd": 1, "up": 1, "an": [1, 2, 3, 5], "just": [1, 2, 3, 4, 5], "simpl": [1, 3], "nevertheless": 1, "still": [1, 2, 4, 5], "get": [1, 3], "term": [1, 2, 4, 5], "discrep": [1, 2], "predict": [1, 2], "estim": [1, 3, 4], "As": [1, 2, 3, 4, 5], "wa": [1, 2, 3, 4, 5], "It": [1, 3], "averag": [1, 2, 3, 5], "much": [1, 2, 3, 4, 5], "deviat": 1, "context": [1, 2], "resm": 1, "nii": [1, 6], "imag": [1, 5, 6], "save": 1, "green": 1, "all": [1, 2, 3, 4, 5, 6], "distanc": [1, 3], "closer": 1, "import": [1, 2, 5], "allow": [1, 3, 4], "generalis": 1, "current": 1, "wider": [1, 4], "popul": [1, 2, 3, 4], "becaus": [1, 2, 3, 4, 5], "variabl": [1, 3], "about": [1, 2, 4, 5], "which": [1, 2, 3, 5, 6], "anoth": [1, 3, 4, 5], "distribut": [1, 3, 5], "want": [1, 2, 3], "infer": [1, 2, 3, 4], "do": [1, 2, 3, 4, 5], "so": [1, 2, 4, 5], "2nd": [1, 3, 4, 5], "later": [1, 2, 3], "plai": 1, "conceptualis": 1, "If": [1, 2, 3, 5], "imagin": [1, 5], "case": [1, 2, 5], "being": [1, 2, 3], "ha": [1, 3, 5, 6], "random": [1, 3], "assort": 1, "parameteris": 1, "formalis": 1, "linear": 1, "also": [1, 3, 4], "known": [1, 2, 3, 4, 5], "multilevel": 1, "format": 1, "write": [1, 2], "j": [1, 3], "begin": [1, 2, 3, 5], "align": [1, 3], "y_": [1, 3], "ij": [1, 3], "mu_": [1, 3, 5], "epsilon_": [1, 3, 5], "quad": [1, 3], "text": [1, 3], "mu": [1, 3], "eta_": [1, 3], "end": [1, 2, 3, 5], "form": [1, 3, 5, 6], "1st": [1, 3, 4, 5, 6], "importantli": [1, 3, 5], "connect": 1, "view": [1, 5], "equat": [1, 3], "sim": [1, 3], "mathcal": [1, 3], "n": [1, 2, 3, 5], "sigma": [1, 3, 5], "_": [1, 2, 3, 5], "w_": [1, 3], "b": [1, 3], "consequ": 1, "instanc": [1, 3, 5], "studi": [1, 2], "irrelev": 1, "would": [1, 3, 5], "true": [1, 4], "had": [1, 2, 5], "set": [1, 2, 3, 5], "those": [1, 3, 4], "specif": [1, 2, 3, 5], "els": [1, 2], "again": [1, 3, 5], "doe": [1, 2, 3, 4], "matter": [1, 4], "care": 1, "howev": [1, 3, 5], "whole": 1, "account": [1, 2, 4], "inform": [1, 3, 4, 5], "clear": 1, "approach": [1, 2, 3, 5], "been": [1, 2, 3, 5, 6], "taken": [1, 3], "over": [1, 2, 3, 5], "year": [1, 2], "you": [1, 2, 3, 4, 5, 6], "through": [1, 3], "onc": [1, 3], "might": 1, "good": [1, 2], "idea": 1, "re": 1, "read": 1, "section": [1, 2, 3, 4], "bigger": 1, "pictur": [1, 3, 6], "mind": 1, "describ": [2, 3], "last": [2, 3], "within": [2, 3, 4], "put": 2, "fit": [2, 3, 4, 6], "base": [2, 4, 5], "between": [2, 3, 4, 5], "measur": [2, 3], "same": [2, 3, 4, 5], "consid": [2, 3, 5], "hypothesi": [2, 5], "test": [2, 3], "built": 2, "perfectli": 2, "valid": 2, "reflect": 2, "fact": [2, 3, 5], "relev": [2, 4], "nobodi": 2, "earli": 2, "involv": [2, 4, 6], "expand": 2, "upon": [2, 3], "concaten": 2, "exampl": [2, 3, 5, 6], "design": [2, 3, 5, 6], "matrix": [2, 5], "10": [2, 5], "contrast": [2, 3, 4, 5, 6], "conduct": [2, 5], "block": 2, "larg": [2, 3, 5], "although": [2, 3, 4, 5], "mai": [2, 3, 5], "initi": 2, "seem": 2, "major": [2, 3], "problem": [2, 4, 5], "thei": [2, 3, 5], "bmatrix": [2, 5], "mathbf": [2, 5], "y": [2, 3, 5], "vdot": 2, "x": [2, 5], "ddot": 2, "dot": [2, 5], "boldsymbol": [2, 5], "beta": [2, 5], "epsilon": [2, 5], "refer": [2, 3], "sub": 2, "zero": [2, 5], "know": [2, 3], "overal": [2, 3], "big": [2, 5], "ani": [2, 3, 5], "establish": [2, 5], "most": [2, 5], "element": 2, "noth": 2, "particular": 2, "larger": [2, 3, 5], "jargon": 2, "treat": [2, 3], "drawn": [2, 3], "sometim": 2, "shorten": 2, "conclus": 2, "appropri": 2, "somewhat": [2, 3], "harmless": 2, "thing": [2, 5], "issu": [2, 4, 5], "than": [2, 3, 5], "try": [2, 3, 4, 5], "lead": [2, 3], "massiv": 2, "inflat": [2, 5], "fals": [2, 3], "posit": [2, 3, 5, 6], "rate": [2, 5], "now": [2, 3, 5], "inappropri": 2, "discuss": [2, 5], "first": [2, 3, 5], "sure": [2, 3, 5], "trick": 2, "interfac": 2, "recal": [2, 3], "specifi": [2, 5, 6], "ask": 2, "add": 2, "new": 2, "session": 2, "give": [2, 3, 5], "impress": 2, "6": [2, 5], "remind": 2, "impli": [2, 3], "second": [2, 3, 5], "find": [2, 4, 5], "yourself": 2, "situat": 2, "reach": 2, "entir": [2, 4], "uncommon": 2, "particularli": [2, 4], "veri": [2, 3, 4], "deficit": 2, "uniqu": 2, "pathologi": 2, "addit": [2, 4, 5], "pool": 2, "justifi": [2, 4], "even": 2, "method": [2, 3, 4, 5], "go": [2, 5], "mani": [2, 3, 5], "erron": 2, "surpris": 2, "long": [2, 5], "took": [2, 3], "realis": 2, "earliest": 2, "1998": [2, 4], "confer": 2, "abstract": 2, "submit": 2, "holm": [2, 4], "friston": [2, 3, 4], "progress": 2, "steadili": 2, "1992": 2, "onward": 2, "signific": [2, 5], "delai": 2, "solut": [2, 3], "propos": 2, "properli": 2, "until": 2, "2009": 2, "mumford": [2, 3], "nichol": [2, 3], "order": [3, 5], "improv": 3, "ffx": 3, "accommod": 3, "let": 3, "return": 3, "hierarch": [3, 4], "earlier": 3, "collaps": 3, "replac": 3, "its": 3, "equal": [3, 4], "contain": [3, 5], "paramet": 3, "associ": [3, 5], "constant": [3, 5], "chang": 3, "variat": [3, 4], "must": [3, 5], "come": [3, 5], "both": [3, 4, 5], "assum": [3, 4], "follow": 3, "kind": 3, "detail": 3, "diagram": [3, 4], "quantifi": 3, "wherea": 3, "exactli": [3, 4, 5], "what": [3, 5], "given": 3, "bar": 3, "residu": [3, 5], "regular": 3, "except": 3, "defin": 3, "repeat": 3, "abov": [3, 5], "deflect": 3, "far": 3, "sampl": 3, "sens": [3, 5], "thought": 3, "rather": [3, 5], "mistak": 3, "factor": 3, "caus": 3, "respond": 3, "ident": [3, 4], "everi": [3, 4, 5], "like": [3, 4], "akin": 3, "probabl": 3, "crowder": 3, "hand": 3, "1990": 3, "poetic": 3, "fashion": [3, 4], "immut": 3, "A": 3, "characterist": 3, "fleet": 3, "aberr": 3, "moment": 3, "rememb": [3, 5], "basic": [3, 5], "definit": 3, "frac": [3, 5], "sum": [3, 5], "recognis": 3, "simpli": 3, "numer": [3, 5], "squar": [3, 4, 5], "similarli": [3, 5], "world": 3, "often": [3, 4, 5], "rfx": 3, "though": 3, "interpret": 3, "interchang": 3, "everyon": 3, "confus": 3, "possibl": [3, 4], "togeth": 3, "mixtur": 3, "7": 3, "complet": 3, "observ": 3, "cross": 3, "solid": 3, "demonstr": 3, "advantag": 3, "separ": [3, 4, 5], "sever": 3, "practic": 3, "correct": [3, 4, 5], "select": 3, "otherwis": 3, "too": 3, "liber": 3, "detect": 3, "noisi": 3, "down": 3, "weight": [3, 4, 5], "automat": 3, "trust": 3, "cleaner": 3, "less": 3, "highli": 3, "benefici": 3, "accur": 3, "flexibl": 3, "clearli": 3, "unfortun": [3, 4], "requir": 3, "resourc": 3, "amount": 3, "memori": 3, "small": 3, "number": [3, 4, 5], "soon": 3, "becom": [3, 5], "impract": 3, "size": 3, "furthermor": [3, 5], "simultan": 3, "iter": [3, 4], "maximum": 3, "likelihood": 3, "voxel": 3, "Not": [3, 4], "slow": 3, "converg": [3, 4], "investig": 3, "guillaum": 3, "et": [3, 5], "al": [3, 5], "2014": 3, "anywher": 3, "hour": 3, "9": [3, 4], "dai": 3, "fail": 3, "lean": 3, "break": 3, "chunk": 3, "lower": 3, "8": 3, "poldrack": 3, "2011": 3, "multi": [3, 4], "implement": [3, 4], "stage": [3, 4, 5], "work": [3, 4], "part": [3, 4, 5], "task": [3, 6], "look": [3, 5], "face": [3, 5], "hous": [3, 5], "activ": 3, "explain": 3, "structur": 3, "perform": [3, 6], "enough": 3, "least": [3, 4], "power": 3, "abil": 3, "out": [3, 5], "integr": 3, "trivial": 3, "hasv": 3, "beckmann": 3, "jenkinson": 3, "smith": 3, "2003": 3, "complic": [3, 5], "bayesian": 3, "flame": 3, "algorithm": [3, 4], "fsl": [3, 4], "recent": [3, 5], "chen": [3, 5], "2012": 3, "adapt": [3, 4], "meta": 3, "achiev": 3, "similar": 3, "3dmema": 3, "afni": [3, 4], "conspicu": 3, "miss": 3, "list": 3, "unfair": 3, "sai": 3, "cannot": 3, "tool": 3, "buri": 3, "insid": 3, "2005": 3, "never": 3, "present": 3, "softwar": 3, "author": 3, "actual": [3, 5], "focu": 3, "mention": 4, "previou": [4, 5], "mfx": 4, "ideal": 4, "flexibli": 4, "mutlilevel": 4, "previous": [4, 5], "computation": 4, "challeng": 4, "origin": 4, "recommend": 4, "start": 4, "them": 4, "remain": [4, 5], "difficulti": 4, "came": 4, "awai": 4, "instead": [4, 5], "throw": 4, "main": [4, 5], "comput": 4, "speed": 4, "fast": 4, "failur": 4, "machineri": [4, 5], "develop": 4, "recycl": [4, 5], "correctli": 4, "suitabl": 4, "willing": 4, "theroret": 4, "realiti": 4, "biggest": 4, "assumpt": 4, "well": [4, 5], "scanner": [4, 5], "nois": [4, 5], "motion": 4, "technic": 4, "event": 4, "respons": [4, 5], "incorrect": 4, "volum": 4, "ultim": 4, "fraught": 4, "littl": [4, 5], "choic": 4, "awar": 4, "distast": 4, "alwai": 4, "option": [4, 5], "proper": 4, "experiment": 5, "optimis": 5, "per": [5, 6], "luckili": 5, "straightforward": 5, "deal": 5, "shape": 5, "bold": 5, "signal": 5, "natur": 5, "low": 5, "frequenc": 5, "simpler": 5, "c_": 5, "c_1": 5, "c_2": 5, "code": 5, "lack": 5, "due": 5, "cell": 5, "benefit": 5, "notat": 5, "renam": 5, "everyth": 5, "v": 5, "hat": 5, "prime": 5, "k": 5, "hypothes": 5, "l": 5, "map": 5, "threshold": 5, "uncorrect": 5, "p": 5, "either": [5, 6], "cluster": 5, "peak": 5, "fdr": 5, "fwe": 5, "saw": 5, "longer": 5, "implic": 5, "intepret": 5, "trickiest": 5, "aspect": 5, "could": 5, "relat": 5, "direct": 5, "opposit": 5, "abl": 5, "neg": [5, 6], "your": 5, "found": 5, "decid": 5, "plot": 5, "notabl": 5, "quit": 5, "magnitud": 5, "three": [5, 6], "axi": 5, "brain": 5, "word": 5, "condit": 5, "essenti": 5, "confid": 5, "interv": 5, "overlap": 5, "null": 5, "highlight": 5, "subtract": 5, "cover": 5, "theoret": 5, "background": 5, "topic": 5, "slight": 5, "should": 5, "focus": 5, "exclus": 5, "t_": 5, "sigma_": 5, "sqrt": 5, "note": 5, "constitut": 5, "increas": 5, "decreas": 5, "rel": 5, "baselin": 5, "bit": 5, "complex": 5, "oftentim": 5, "notion": 5, "patient": 5, "versu": 5, "control": 5, "region": 5, "Of": 5, "cours": 5, "pervad": 5, "call": 5, "2018": 5, "11": 5, "top": 5, "area": 5, "cutoff": 5, "pair": 5, "side": 5, "under": 5, "bottom": 5, "equival": 5, "doubl": 5, "20": 5, "comparison": 5, "nomin": 5, "maintain": 5, "off": 5, "tabl": 5, "answer": 5, "notic": 5, "r": 5, "admittedli": 5, "formula": 5, "ingredi": 5, "extra": 5, "freedom": 5, "worri": 5, "agnost": 5, "numref": 5, "version": 5, "video": 6, "below": 6, "spm12": 6, "dataset": 6, "continu": 6, "valenc": 6, "classifi": 6, "older": 6, "adult": 6, "younger": 6, "fulli": 6, "pre": 6, "produc": 6, "con_": 6, "con_0001": 6, "con_0002": 6, "neutral": 6, "con_0003": 6, "download": 6}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"introduct": 0, "content": 0, "about": [0, 3], "author": 0, "sourc": 1, "varianc": [1, 3], "within": 1, "subject": [1, 2, 3], "between": 1, "The": [1, 2, 3, 4], "repeat": 1, "measur": 1, "sampl": 1, "model": [1, 3, 5, 6], "hierarch": 1, "perspect": 1, "fix": 2, "effect": [2, 3], "wrong": 2, "wai": [2, 3, 4], "stack": 2, "multipl": 2, "1st": 2, "level": [2, 5, 6], "what": 2, "us": [2, 5], "i": 2, "ffx": 2, "analysi": 2, "histori": 2, "analys": 2, "mix": 3, "best": 3, "advanc": 3, "more": 3, "mfx": 3, "term": 3, "comput": 3, "challeng": 3, "problem": 3, "singl": 3, "summari": 4, "statist": 4, "spm": [4, 6], "approach": 4, "justif": 4, "build": 5, "group": [5, 6], "indic": 5, "variabl": 5, "estim": 5, "paramet": 5, "interpret": 5, "voxel": 5, "A": 5, "b": 5, "c": 5, "infer": 5, "One": 5, "tail": 5, "test": 5, "two": 5, "when": 5, "t": 5, "f": 5}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 57}, "alltitles": {"Introduction": [[0, "introduction"]], "Contents": [[0, "contents"]], "About the Author": [[0, "about-the-author"]], "Sources of Variance": [[1, "sources-of-variance"]], "Within-subject Variance": [[1, "within-subject-variance"]], "Between-subject Variance": [[1, "between-subject-variance"]], "The Repeated Measures Sampling Model": [[1, "the-repeated-measures-sampling-model"]], "The Hierarchical Perspective": [[1, "the-hierarchical-perspective"]], "Fixed-effects: The Wrong Way": [[2, "fixed-effects-the-wrong-way"]], "Stacking Multiple Subjects at the 1st-level": [[2, "stacking-multiple-subjects-at-the-1st-level"]], "What Use is a FFX Analysis?": [[2, "what-use-is-a-ffx-analysis"]], "History of FFX Analyses": [[2, null]], "Mixed-effects: The Best Way": [[3, "mixed-effects-the-best-way"]], "Advanced: More About the MFX Model Terms": [[3, null]], "Computational Challenges for MFX": [[3, "computational-challenges-for-mfx"]], "The Problem of Single-subject Variances": [[3, "the-problem-of-single-subject-variances"]], "Summary Statistics: The SPM Way": [[4, "summary-statistics-the-spm-way"]], "The Summary Statistics Approach": [[4, "the-summary-statistics-approach"]], "Summary-statistics Justification": [[4, "summary-statistics-justification"]], "Building Group-level Models": [[5, "building-group-level-models"]], "Indicator Variables for Groups": [[5, "indicator-variables-for-groups"]], "Model Estimation": [[5, "model-estimation"]], "Parameter Interpretation": [[5, "parameter-interpretation"]], "Voxel A": [[5, null]], "Voxel B": [[5, null]], "Voxel C": [[5, null]], "Inference": [[5, "inference"]], "One-tailed Tests": [[5, "one-tailed-tests"]], "Two-tailed Tests": [[5, "two-tailed-tests"]], "When to Use t and When to Use F?": [[5, null]], "Group-level Modelling in SPM": [[6, "group-level-modelling-in-spm"]]}, "indexentries": {}})